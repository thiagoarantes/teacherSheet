import JSZip from "jszip";
import { saveAs } from "file-saver";

export function generateDocx(doc: any) {
  const nodeParent = doc.getElementsByTagName("body");
  const xmlDoc = document.implementation.createDocument(null, "mywordXML");
  let parentXML = xmlDoc.childNodes[0];
  const zip = new JSZip();

  let linkCounter = 1;
  let relsDocumentXML =
    '<?xml version="1.0" encoding="utf-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
    '<Relationship Id="rId0" Target="styles.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"/>';

  let listCounter = 0;
  let numberingString = "";
  let numIdString = "";

  let cols = 0;

  let currentTable: any = null;
  let orientationRTL = false;

  function checkIfInsertTag(newEle: any): boolean {
    if (newEle?.nodeName === "w:Noinsert") {
      return false;
    }

    return true;
  }

  function createNodeBlockquote(xmlDoc: any): any {
    const newEle = xmlDoc.createElement("w:p");
    const wpPr = xmlDoc.createElement("w:pPr");

    const wstyle = xmlDoc.createElement("w:pStyle");
    wstyle.setAttribute("w:val", "blockQuote");
    wpPr.appendChild(wstyle);

    newEle.appendChild(wpPr);

    return newEle;
  }

  function consanguinityList(node: any): boolean {
    if (
      node.parentNode.nodeName === "BODY" ||
      node.parentNode.nodeName === "TD"
    ) {
      return false;
    }

    if (
      node.nodeName === "UL" ||
      node.nodeName === "OL" ||
      node.nodeName === "LI"
    ) {
      return true;
    }

    const parentNode = node.parentNode;

    for (
      let childIndex = 0;
      childIndex < node.childNodes.length;
      childIndex++
    ) {
      if (consanguinityList(node.childNodes[childIndex])) {
        return true;
      }
    }

    for (
      let siblingIndex = 0;
      siblingIndex < parentNode.childNodes.length;
      siblingIndex++
    ) {
      if (parentNode.childNodes[siblingIndex] != node) {
        const siblingNode = parentNode.childNodes[siblingIndex];
        for (
          let nephewIndex = 0;
          nephewIndex < siblingNode.childNodes.length;
          nephewIndex++
        ) {
          if (consanguinityList(siblingNode.childNodes[nephewIndex])) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function createNodeXML(node: any, xmlDoc: any, parentXMLElement: any): void {
    const newEle = parseHTMLtoDocx(node, xmlDoc);

    const ancestor = xmlDoc.getElementsByTagName("w:body")[0];

    const insertTag = checkIfInsertTag(newEle);

    if (insertTag) {
      if (newEle.nodeName === "w:tbl") {
        ancestor.appendChild(newEle);
        currentTable = newEle;
      } else if (newEle.nodeName === "w:tr") {
        if (currentTable) {
          currentTable.appendChild(newEle);
        }
      } else if (consanguinityList(node)) {
        if (newEle.nodeName === "w:r") {
          if (
            ancestor.lastElementChild &&
            ancestor.lastElementChild.nodeName === "w:p"
          ) {
            ancestor.lastElementChild.appendChild(newEle);
          } else {
            const p = xmlDoc.createElement("w:p");
            p.appendChild(newEle);
            ancestor.appendChild(p);
          }
        } else {
          ancestor.appendChild(newEle);
        }
      } else {
        parentXMLElement.appendChild(newEle);
      }
    }

    if (newEle && newEle.nodeName !== "w:Noinsert") {
      parentXMLElement = newEle;
    }

    for (
      let childIndex = 0;
      childIndex < node.childNodes.length;
      childIndex++
    ) {
      createNodeXML(node.childNodes[childIndex], xmlDoc, parentXMLElement);
    }
  }

  function createNodeTD(node: any, xmlDoc: any, colsParam: any): any {
    const widthPercent = 100 / colsParam;

    const newEle = xmlDoc.createElement("w:tc");
    const wtcPr = xmlDoc.createElement("w:tcPr");
    const valign = xmlDoc.createElement("w:vAlign");
    valign.setAttribute("w:val", "bottom");
    const wtblBorders = xmlDoc.createElement("w:tblBorders");
    const wtop = xmlDoc.createElement("w:top");
    wtop.setAttribute("w:val", "single");
    wtop.setAttribute("w:sz", "10");
    wtop.setAttribute("w:space", "0");
    wtop.setAttribute("w:color", "000000");
    const wstart = xmlDoc.createElement("w:start");
    wstart.setAttribute("w:val", "single");
    wstart.setAttribute("w:sz", "10");
    wstart.setAttribute("w:space", "0");
    wstart.setAttribute("w:color", "000000");
    const wbottom = xmlDoc.createElement("w:bottom");
    wbottom.setAttribute("w:val", "single");
    wbottom.setAttribute("w:sz", "10");
    wbottom.setAttribute("w:space", "0");
    wbottom.setAttribute("w:color", "000000");
    const wend = xmlDoc.createElement("w:end");
    wend.setAttribute("w:val", "single");
    wend.setAttribute("w:sz", "10");
    wend.setAttribute("w:space", "0");
    wend.setAttribute("w:color", "000000");
    wtblBorders.appendChild(wtop);
    wtblBorders.appendChild(wstart);
    wtblBorders.appendChild(wbottom);
    wtblBorders.appendChild(wend);
    const grandparentNode = node.parentNode.parentNode;

    if (grandparentNode.nodeName === "THEAD") {
      const wshd = xmlDoc.createElement("w:shd");
      wshd.setAttribute("w:val", "clear");
      wshd.setAttribute("w:fill", "EEEEEE");
      wtcPr.appendChild(wshd);
    }

    const wtcW = xmlDoc.createElement("w:tcW");
    wtcW.setAttribute("w:type", "pct");
    wtcW.setAttribute("w:w", widthPercent + "%");

    wtcPr.appendChild(wtblBorders);
    wtcPr.appendChild(wtcW);
    wtcPr.appendChild(valign);

    newEle.appendChild(wtcPr);

    if (node.childNodes.length == 0) {
      const pNode = xmlDoc.createElement("w:p");
      const rNode = xmlDoc.createElement("w:r");
      const textNode = xmlDoc.createElement("w:t");
      const textContent = xmlDoc.createTextNode(" ");

      textNode.appendChild(textContent);
      rNode.appendChild(textNode);
      pNode.appendChild(rNode);
      newEle.appendChild(pNode);
    }

    return newEle;
  }

  function createNodeTR(xmlDoc: any): any {
    return xmlDoc.createElement("w:tr");
  }

  function createTableNode(xmlDoc: any): any {
    const newEle = xmlDoc.createElement("w:tbl");
    const wtblPr = xmlDoc.createElement("w:tblPr");
    const wtblStyle = xmlDoc.createElement("w:tblStyle");
    wtblStyle.setAttribute("w:val", "TableGrid");
    const wtblW = xmlDoc.createElement("w:tblW");
    wtblW.setAttribute("w:w", "5000");
    wtblW.setAttribute("w:type", "pct");
    wtblPr.appendChild(wtblStyle);
    wtblPr.appendChild(wtblW);

    const wtblBorders = xmlDoc.createElement("w:tblBorders");
    const wtop = xmlDoc.createElement("w:top");
    wtop.setAttribute("w:val", "single");
    wtop.setAttribute("w:sz", "10");
    wtop.setAttribute("w:space", "0");
    wtop.setAttribute("w:color", "000000");
    const wstart = xmlDoc.createElement("w:start");
    wstart.setAttribute("w:val", "single");
    wstart.setAttribute("w:sz", "10");
    wstart.setAttribute("w:space", "0");
    wstart.setAttribute("w:color", "000000");
    const wbottom = xmlDoc.createElement("w:bottom");
    wbottom.setAttribute("w:val", "single");
    wbottom.setAttribute("w:sz", "10");
    wbottom.setAttribute("w:space", "0");
    wbottom.setAttribute("w:color", "000000");
    const wend = xmlDoc.createElement("w:end");
    wend.setAttribute("w:val", "single");
    wend.setAttribute("w:sz", "10");
    wend.setAttribute("w:space", "0");
    wend.setAttribute("w:color", "000000");

    const windideH = xmlDoc.createElement("w:insideH");
    windideH.setAttribute("w:val", "single");
    windideH.setAttribute("w:sz", "5");
    windideH.setAttribute("w:space", "0");
    windideH.setAttribute("w:color", "000000");
    const windideV = xmlDoc.createElement("w:insideV");
    windideV.setAttribute("w:val", "single");
    windideV.setAttribute("w:sz", "5");
    windideV.setAttribute("w:space", "0");
    windideV.setAttribute("w:color", "000000");

    wtblBorders.appendChild(wtop);
    wtblBorders.appendChild(wstart);
    wtblBorders.appendChild(wbottom);
    wtblBorders.appendChild(wend);

    wtblBorders.appendChild(windideH);
    wtblBorders.appendChild(windideV);

    wtblPr.appendChild(wtblBorders);

    newEle.appendChild(wtblPr);

    return newEle;
  }

  function createHeading(node: any, xmlDoc: any, pos: any): any {
    let newEle;

    if (
      node.parentNode.nodeName === "BODY" ||
      node.parentNode.nodeName === "TD"
    ) {
      newEle = xmlDoc.createElement("w:p");

      const newEle2 = xmlDoc.createElement("w:pPr");

      const newEle3 = xmlDoc.createElement("w:pStyle");
      newEle3.setAttribute("w:val", "Heading" + pos);

      newEle.appendChild(newEle2);
      newEle2.appendChild(newEle3);

      newEle = checkRTL(newEle, xmlDoc, node);
    } else {
      newEle = xmlDoc.createElement("w:r");
    }

    return newEle;
  }
  function checkRTL(newEle: any, xmlDoc: any, node: any): any {
    if (node.attributes && node.attributes[0]) {
      let direction = node.attributes[0].nodeValue.replace(" ", "");

      direction = direction.replace("direction:", "");

      const res = direction.substring(0, 3);

      if (res === "rtl") {
        orientationRTL = true;
        let pPrElement;

        if (
          newEle.childNodes &&
          newEle.childNodes[0] &&
          newEle.childNodes[0].nodeName === "w:pPr"
        ) {
          pPrElement = newEle.childNodes[0];
        } else {
          pPrElement = xmlDoc.createElement("w:pPr");
          newEle.appendChild(pPrElement);
        }

        const bidi = xmlDoc.createElement("w:bidi");
        bidi.setAttribute("w:val", "1");
        pPrElement.appendChild(bidi);
      } else {
        orientationRTL = false;
      }
    }

    return newEle;
  }

  function createNodeStrong(node: any, xmlDoc: any): any {
    let newEle;

    const newEleR = xmlDoc.createElement("w:r");
    const bold = xmlDoc.createElement("w:rPr");
    const propertyBold = xmlDoc.createElement("w:b");
    newEleR.appendChild(bold);
    bold.appendChild(propertyBold);

    if (
      node.parentNode.nodeName === "BODY" ||
      node.parentNode.nodeName === "TD"
    ) {
      newEle = xmlDoc.createElement("w:p");
      newEle.appendChild(newEleR);
    } else {
      newEle = newEleR;
    }

    return newEle;
  }

  function createNodeEM(node: any, xmlDoc: any): any {
    let newEle;

    const newEleR = xmlDoc.createElement("w:r");
    const nodeProperty = xmlDoc.createElement("w:rPr");
    const property = xmlDoc.createElement("w:i");
    newEleR.appendChild(nodeProperty);
    nodeProperty.appendChild(property);

    if (
      node.parentNode.nodeName === "BODY" ||
      node.parentNode.nodeName === "TD"
    ) {
      newEle = xmlDoc.createElement("w:p");
      newEle.appendChild(newEleR);
    } else {
      newEle = newEleR;
    }

    return newEle;
  }

  function createNodeBR(node: any, xmlDoc: any): any {
    let newEle;

    const newEleR = xmlDoc.createElement("w:r");
    const eleBR = xmlDoc.createElement("w:br");
    newEleR.appendChild(eleBR);

    if (
      node.parentNode.nodeName === "BODY" ||
      node.parentNode.nodeName === "TD"
    ) {
      newEle = xmlDoc.createElement("w:p");
      newEle.appendChild(newEleR);
    } else {
      newEle = newEleR;
    }

    return newEle;
  }

  function createHiperlinkNode(node: any, xmlDoc: any, numLinkParam: any): any {
    for (let j = 0; j < node.childNodes.length; j++) {
      if (node.childNodes[j].nodeName === "IMG") {
        const nR = xmlDoc.createElement("w:r");
        const nT = xmlDoc.createElement("w:t");
        nT.setAttribute("xml:space", "preserve");
        const t = xmlDoc.createTextNode("link format not available");
        nR.appendChild(nT);
        nT.appendChild(t);

        if (node.parentNode.nodeName === "BODY") {
          const p = xmlDoc.createElement("w:p");
          p.appendChild(nR);
          return p;
        } else {
          return nR;
        }
      }
    }

    const hyperlinkElement = xmlDoc.createElement("w:hyperlink");

    if (node.href) {
      hyperlinkElement.setAttribute("r:id", "link" + numLinkParam);
    }

    let newEle;

    if (
      node.parentNode.nodeName === "BODY" ||
      node.parentNode.nodeName === "TD"
    ) {
      newEle = xmlDoc.createElement("w:p");
      newEle.appendChild(hyperlinkElement);
    } else {
      newEle = hyperlinkElement;
    }

    return newEle;
  }

  function createNodeLi(
    xmlDoc: any,
    countListParam: any,
    itemsListParam: any
  ): any {
    const newEle = xmlDoc.createElement("w:p");
    const pr = xmlDoc.createElement("w:pPr");
    const rstyle = xmlDoc.createElement("w:pStyle");
    rstyle.setAttribute("w:val", "ListParagraph");

    pr.appendChild(rstyle);
    newEle.appendChild(pr);

    const numPrElement = xmlDoc.createElement("w:numPr");
    const ilvlElement = xmlDoc.createElement("w:ilvl");
    ilvlElement.setAttribute("w:val", itemsListParam);
    const numIdElement = xmlDoc.createElement("w:numId");
    numIdElement.setAttribute("w:val", countListParam);

    numPrElement.appendChild(ilvlElement);
    numPrElement.appendChild(numIdElement);

    pr.appendChild(numPrElement);

    return newEle;
  }

  function createNodeParagraphOrRun(node: any, xmlDoc: any): any {
    let tx = node.data;

    if (!tx) {
      tx = "";
    }

    let newEle;

    if (
      node.parentNode.nodeName === "BODY" ||
      node.parentNode.nodeName === "TD"
    ) {
      newEle = xmlDoc.createElement("w:p");
      newEle = checkRTL(newEle, xmlDoc, node);
    } else {
      newEle = xmlDoc.createElement("w:r");
    }

    return newEle;
  }

  function createMyTextNode(node: any, xmlDoc: any): any {
    let tx = node.data;

    if (!tx) {
      tx = "";
    }

    if (
      node.parentNode.nodeName === "TR" ||
      node.parentNode.nodeName === "TABLE"
    ) {
      return xmlDoc.createElement("w:Noinsert");
    } else if (node.parentNode.nodeName === "BODY" && !node.data.trim()) {
      return xmlDoc.createElement("w:Noinsert");
    }

    const newEleR = xmlDoc.createElement("w:r");

    if (orientationRTL) {
      const rPrElement = xmlDoc.createElement("w:rPr");
      const rtlNode = xmlDoc.createElement("w:rtl");
      rtlNode.setAttribute("w:val", "1");
      rPrElement.appendChild(rtlNode);

      newEleR.appendChild(rPrElement);
    }

    if (node.parentNode.nodeName === "A" && node.parentNode.href) {
      const nodeStyleLink = xmlDoc.createElement("w:rStyle");
      nodeStyleLink.setAttribute("w:val", "Hyperlink");
      newEleR.appendChild(nodeStyleLink);
    }

    const textNode = xmlDoc.createElement("w:t");
    textNode.setAttribute("xml:space", "preserve");
    const textContent = xmlDoc.createTextNode(tx);

    newEleR.appendChild(textNode);
    textNode.appendChild(textContent);

    let newEle;

    if (
      node.parentNode.nodeName === "BODY" ||
      node.parentNode.nodeName === "TD"
    ) {
      newEle = xmlDoc.createElement("w:p");
      newEle.appendChild(newEleR);
    } else {
      newEle = newEleR;
    }

    return newEle;
  }

  function createAbstractNumListDecimal(
    currentNumberingString: string,
    currentCountList: number
  ): string {
    let resultNumberingString =
      `<w:abstractNum w:abstractNumId="` +
      currentCountList +
      `" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
	<w:multiLevelType w:val="hybridMultilevel" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" />
		<w:lvl w:ilvl="0" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:start w:val="1" />
			<w:numFmt w:val="decimal" />
			<w:lvlText w:val="%1." />
			<w:lvlJc w:val="left" />
			<w:pPr><w:ind w:left="720" w:hanging="360" /></w:pPr>
		</w:lvl>
		<w:lvl w:ilvl="1" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:start w:val="1" /><w:numFmt w:val="lowerLetter" /><w:lvlText w:val="%2." /><w:lvlJc w:val="left" /><w:pPr><w:ind w:left="1440" w:hanging="360" /></w:pPr>
		</w:lvl>
		<w:lvl w:ilvl="2" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:start w:val="1" /><w:numFmt w:val="lowerRoman" /><w:lvlText w:val="%3." /><w:lvlJc w:val="right" /><w:pPr><w:ind w:left="2160" w:hanging="180" /></w:pPr>
		</w:lvl>
		<w:lvl w:ilvl="3" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:start w:val="1" /><w:numFmt w:val="decimal" /><w:lvlText w:val="%4." /><w:lvlJc w:val="left" /><w:pPr><w:ind w:left="2880" w:hanging="360" /></w:pPr>
		</w:lvl>
		<w:lvl w:ilvl="4" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:start w:val="1" /><w:numFmt w:val="lowerLetter" /><w:lvlText w:val="%5." /><w:lvlJc w:val="left" /><w:pPr><w:ind w:left="3600" w:hanging="360" /></w:pPr>
		</w:lvl>
		<w:lvl w:ilvl="5" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:start w:val="1" /><w:numFmt w:val="lowerRoman" /><w:lvlText w:val="%6." /><w:lvlJc w:val="right" /><w:pPr><w:ind w:left="4320" w:hanging="180" /></w:pPr>
		</w:lvl>
		<w:lvl w:ilvl="6" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:start w:val="1" /><w:numFmt w:val="decimal" /><w:lvlText w:val="%7." /><w:lvlJc w:val="left" /><w:pPr><w:ind w:left="5040" w:hanging="360" /></w:pPr>
		</w:lvl>
		<w:lvl w:ilvl="7" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:start w:val="1" /><w:numFmt w:val="lowerLetter" /><w:lvlText w:val="%8." /><w:lvlJc w:val="left" /><w:pPr><w:ind w:left="5760" w:hanging="360" /></w:pPr>
		</w:lvl>
		<w:lvl w:ilvl="8" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:start w:val="1" /><w:numFmt w:val="lowerRoman" /><w:lvlText w:val="%9." /><w:lvlJc w:val="right" /><w:pPr><w:ind w:left="6480" w:hanging="180" /></w:pPr>
		</w:lvl>
</w:abstractNum>` +
      currentNumberingString;

    return resultNumberingString;
  }

  function createAbstractNumListBullet(
    currentNumberingString: string,
    currentCountList: number
  ): string {
    let resultNumberingString =
      `<w:abstractNum xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:abstractNumId="` +
      currentCountList +
      `">
	<w:multiLevelType xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="hybridMultilevel"/>
	<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="0">
		<w:start w:val="1"/>
		<w:numFmt w:val="bullet"/>
		<w:lvlText w:val=""/>
		<w:lvlJc w:val="left"/>
		<w:pPr>
		<w:ind w:left="720" w:hanging="360"/>
		</w:pPr>
		<w:rPr>
		<w:rFonts w:hint="default" w:ascii="Symbol" w:hAnsi="Symbol"/>
		</w:rPr>
	</w:lvl>
	<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="1">
		<w:start w:val="1"/>
		<w:numFmt w:val="bullet"/>
		<w:lvlText w:val="o"/>
		<w:lvlJc w:val="left"/>
		<w:pPr>
		<w:ind w:left="1440" w:hanging="360"/>
		</w:pPr>
		<w:rPr>
		<w:rFonts w:hint="default" w:ascii="Courier New" w:hAnsi="Courier New"/>
		</w:rPr>
	</w:lvl>
	<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="2">
		<w:start w:val="1"/>
		<w:numFmt w:val="bullet"/>
		<w:lvlText w:val=""/>
		<w:lvlJc w:val="left"/>
		<w:pPr>
		<w:ind w:left="2160" w:hanging="360"/>
		</w:pPr>
		<w:rPr>
		<w:rFonts w:hint="default" w:ascii="Wingdings" w:hAnsi="Wingdings"/>
		</w:rPr>
	</w:lvl>
	<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="3">
	<w:start w:val="1"/>
	<w:numFmt w:val="bullet"/>
	<w:lvlText w:val=""/>
	<w:lvlJc w:val="left"/>
	<w:pPr>
	<w:ind w:left="2880" w:hanging="360"/>
	</w:pPr>
	<w:rPr>
	<w:rFonts w:hint="default" w:ascii="Symbol" w:hAnsi="Symbol"/>
	</w:rPr>
	</w:lvl>
	<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="4">
	<w:start w:val="1"/>
	<w:numFmt w:val="bullet"/>
	<w:lvlText w:val="o"/>
	<w:lvlJc w:val="left"/>
	<w:pPr>
	<w:ind w:left="3600" w:hanging="360"/>
	</w:pPr>
	<w:rPr>
	<w:rFonts w:hint="default" w:ascii="Courier New" w:hAnsi="Courier New"/>
	</w:rPr>
	</w:lvl>
	<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="5">
	<w:start w:val="1"/>
	<w:numFmt w:val="bullet"/>
	<w:lvlText w:val=""/>
	<w:lvlJc w:val="left"/>
	<w:pPr>
	<w:ind w:left="4320" w:hanging="360"/>
	</w:pPr>
	<w:rPr>
	<w:rFonts w:hint="default" w:ascii="Wingdings" w:hAnsi="Wingdings"/>
	</w:rPr>
	</w:lvl>
	<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="6">
	<w:start w:val="1"/>
	<w:numFmt w:val="bullet"/>
	<w:lvlText w:val=""/>
	<w:lvlJc w:val="left"/>
	<w:pPr>
	<w:ind w:left="5040" w:hanging="360"/>
	</w:pPr>
	<w:rPr>
	<w:rFonts w:hint="default" w:ascii="Symbol" w:hAnsi="Symbol"/>
	</w:rPr>
	</w:lvl>
	<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="7">
	<w:start w:val="1"/>
	<w:numFmt w:val="bullet"/>
	<w:lvlText w:val="o"/>
	<w:lvlJc w:val="left"/>
	<w:pPr>
	<w:ind w:left="5760" w:hanging="360"/>
	</w:pPr>
	<w:rPr>
	<w:rFonts w:hint="default" w:ascii="Courier New" w:hAnsi="Courier New"/>
	</w:rPr>
	</w:lvl>
	<w:lvl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:ilvl="8">
	<w:start w:val="1"/>
	<w:numFmt w:val="bullet"/>
	<w:lvlText w:val=""/>
	<w:lvlJc w:val="left"/>
	<w:pPr>
	<w:ind w:left="6480" w:hanging="360"/>
	</w:pPr>
	<w:rPr>
	<w:rFonts w:hint="default" w:ascii="Wingdings" w:hAnsi="Wingdings"/>
	</w:rPr>
	</w:lvl>
</w:abstractNum>` +
      currentNumberingString;

    return resultNumberingString;
  }

  function createNumIdList(
    currentNumIdString: string,
    currentCountList: number
  ): string {
    let resultNumIdString =
      '<w:num w:numId="' +
      currentCountList +
      '"><w:abstractNumId w:val="' +
      currentCountList +
      '"/></w:num>' +
      currentNumIdString;

    return resultNumIdString;
  }

  function createDocx(XmlDocumentDocx: string, zipParam: JSZip): void {
    const relationShips =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
      "</Relationships>";

    const contentTypes =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default ContentType="image/jpeg" Extension="jpg"/>' +
      '<Default ContentType="image/png" Extension="png"/>' +
      '<Default ContentType="image/gif" Extension="gif"/>' +
      '<Default Extension="xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
      '<Override ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml" PartName="/word/styles.xml"/>' +
      '<Override ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml" PartName="/word/numbering.xml"/>' +
      "</Types>";

    const head_docx =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 w15 wp14">';

    const footer = "</w:document>";

    const styles = `
		  <w:styles xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml" mc:Ignorable="w14 w15 wp14">
		<w:style w:type="paragraph" w:styleId="Heading1">
			<w:name w:val="Heading 1"/>
			<w:basedOn w:val="Normal"/>
			<w:next w:val="Normal"/>
			<w:link w:val="Heading1Char"/>
			<w:uiPriority w:val="9"/>
			<w:qFormat/>
			<w:pPr>
				<w:keepNext/>
				<w:keepLines/>
				<w:spacing w:before="480" w:after="0"/>
				<w:outlineLvl w:val="0"/>
			</w:pPr>
			<w:rPr>
				<w:b/>
				<w:color w:val="000000"/>
				<w:sz w:val="48"/>
			</w:rPr>
			</w:style>
		<w:style w:type="paragraph" w:styleId="Heading2">
			<w:name w:val="Heading 2"/>
			<w:basedOn w:val="Normal"/>
			<w:next w:val="Normal"/>
			<w:link w:val="Heading1Char"/>
			<w:uiPriority w:val="9"/>
			<w:qFormat/>
			<w:pPr>
				<w:keepNext/>
				<w:keepLines/>
				<w:spacing w:before="480" w:after="0"/>
				<w:outlineLvl w:val="0"/>
			</w:pPr>
			<w:rPr>
				<w:b/>
				<w:color w:val="000000"/>
				<w:sz w:val="38"/>
			</w:rPr>
			</w:style>
		<w:style w:type="paragraph" w:styleId="Heading3">
			<w:name w:val="Heading 3"/>
			<w:basedOn w:val="Normal"/>
			<w:next w:val="Normal"/>
			<w:link w:val="Heading1Char"/>
			<w:uiPriority w:val="9"/>
			<w:qFormat/>
			<w:pPr>
				<w:keepNext/>
				<w:keepLines/>
				<w:spacing w:before="480" w:after="0"/>
				<w:outlineLvl w:val="0"/>
			</w:pPr>
			<w:rPr>				
				<w:b/>
				<w:color w:val="000000"/>
				<w:sz w:val="35"/>
			</w:rPr>
			</w:style>
		<w:style w:type="paragraph" w:styleId="Heading4">
			<w:name w:val="Heading 4"/>
			<w:basedOn w:val="Normal"/>
			<w:next w:val="Normal"/>
			<w:link w:val="Heading1Char"/>
			<w:uiPriority w:val="9"/>
			<w:qFormat/>
			<w:pPr>
				<w:keepNext/>
				<w:keepLines/>
				<w:spacing w:before="480" w:after="0"/>
				<w:outlineLvl w:val="0"/>
			</w:pPr>
			<w:rPr>
				<w:b/>
				<w:color w:val="000000"/>
				<w:sz w:val="30"/>
			</w:rPr>
			</w:style>	
		<w:style w:type="paragraph" w:styleId="Heading5">
			<w:name w:val="Heading 5"/>
			<w:basedOn w:val="Normal"/>
			<w:next w:val="Normal"/>
			<w:link w:val="Heading1Char"/>
			<w:uiPriority w:val="9"/>
			<w:qFormat/>
			<w:pPr>
				<w:keepNext/>
				<w:keepLines/>
				<w:spacing w:before="480" w:after="0"/>
				<w:outlineLvl w:val="0"/>
			</w:pPr>
			<w:rPr>
				
				<w:b/>
				<w:color w:val="000000"/>
				<w:sz w:val="28"/>
			</w:rPr>
			</w:style>
		<w:style w:type="paragraph" w:styleId="Heading6">
			<w:name w:val="Heading 6"/>
			<w:basedOn w:val="Normal"/>
			<w:next w:val="Normal"/>
			<w:link w:val="Heading1Char"/>
			<w:uiPriority w:val="9"/>
			<w:qFormat/>
			<w:pPr>
				<w:keepNext/>
				<w:keepLines/>
				<w:spacing w:before="480" w:after="0"/>
				<w:outlineLvl w:val="0"/>
			</w:pPr>
			<w:rPr>
				<w:b/>
				<w:color w:val="000000"/>
				<w:sz w:val="25"/>
			</w:rPr>
			</w:style>	
			<w:style w:type="paragraph" w:styleId="blockQuote">
			<w:name w:val="blockQuote"/>
			<w:basedOn w:val="Normal"/>
			<w:next w:val="Normal"/>			
			<w:uiPriority w:val="9"/>
			<w:qFormat/>
			<w:pPr>			
				<w:spacing w:before="360" w:after="360"/>
				<w:ind w:left="1080" w:right="1080" />
			</w:pPr>
			<w:rPr>				
				<w:color w:val="#222222"/>
				<w:sz w:val="30"/>
			</w:rPr>			
			</w:style>			
		<w:style xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:type="character" w:styleId="Hyperlink" mc:Ignorable="w14">
			<w:name xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="Hyperlink"/>
			<w:basedOn xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="DefaultParagraphFont"/>
			<w:uiPriority xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="99"/>
			<w:unhideWhenUsed xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"/>
			<w:rPr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:color w:val="0563C1" />
			<w:b/>
			<w:u w:val="single"/>
			</w:rPr>
			</w:style>
		<w:style mc:Ignorable="w14" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
  w:styleId="ListParagraph" w:type="paragraph">
			<w:name xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="List Paragraph"/>
			<w:basedOn xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="Normal"/>
			<w:uiPriority xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:val="34"/>
			<w:qFormat xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"/>
			<w:pPr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
			<w:ind xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" w:left="720"/>
			<w:contextualSpacing xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"/>
			</w:pPr>
			</w:style>
		</w:styles>
		`;

    const numberingHeader =
      '<?xml version="1.0" encoding="utf-8"?><w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">';
    const numberingFooter = "</w:numbering>";

    let finalNumberingString =
      numberingHeader + numberingString + numIdString + numberingFooter;

    zipParam.file("_rels/.rels", relationShips);
    zipParam.file("[Content_Types].xml", contentTypes);
    let finalXmlDocumentDocx = head_docx + XmlDocumentDocx + footer;

    zipParam.file("word/document.xml", finalXmlDocumentDocx);
    zipParam.file("word/styles.xml", styles);
    zipParam.file("word/numbering.xml", finalNumberingString);

    zipParam.generateAsync({ type: "blob" }).then(function (content: any) {
      saveAs(content, "correction.docx");
    });
  }

  function parseHTMLtoDocx(node: any, xmlDoc: any): any {
    const headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
    let newEle: any;

    if (node.nodeName === "BODY") {
      newEle = xmlDoc.createElement("w:body");
    } else if (headings.indexOf(node.nodeName) >= 0) {
      const pos = headings.indexOf(node.nodeName) + 1;
      newEle = createHeading(node, xmlDoc, pos);
    } else if (node.nodeName === "P") {
      newEle = createNodeParagraphOrRun(node, xmlDoc);
    } else if (node.nodeName === "STRONG") {
      newEle = createNodeStrong(node, xmlDoc);
    } else if (node.nodeName === "EM") {
      newEle = createNodeEM(node, xmlDoc);
    } else if (node.nodeName === "BR") {
      newEle = createNodeBR(node, xmlDoc);
    } else if (node.nodeName === "A") {
      if (node.href) {
        const idLink = "link" + linkCounter;
        relsDocumentXML =
          relsDocumentXML +
          '<Relationship Id="' +
          idLink +
          '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="' +
          node.href +
          '" TargetMode="External"/>';

        newEle = createHiperlinkNode(node, xmlDoc, linkCounter);

        linkCounter++;
      } else {
        newEle = createNodeParagraphOrRun(node, xmlDoc);
      }
    } else if (node.nodeName === "UL" || node.nodeName === "OL") {
      if (node.parentNode.nodeName != "LI") {
        listCounter++;
      }

      if (node.nodeName === "UL") {
        numberingString = createAbstractNumListBullet(
          numberingString,
          listCounter
        );
      } else if (node.nodeName === "OL") {
        numberingString = createAbstractNumListDecimal(
          numberingString,
          listCounter
        );
      }

      numIdString = createNumIdList(numIdString, listCounter);

      newEle = xmlDoc.createElement("w:Noinsert");
    } else if (node.nodeName === "LI") {
      let levelList = 0;
      let grandparentNode = node.parentNode.parentNode;

      if (grandparentNode) {
        let isGrandparentLI = true;

        while (isGrandparentLI && grandparentNode.nodeName === "LI") {
          levelList++;

          if (grandparentNode.parentNode.parentNode) {
            isGrandparentLI = true;
            grandparentNode = grandparentNode.parentNode.parentNode;
          } else {
            isGrandparentLI = false;
          }
        }
      }

      newEle = createNodeLi(xmlDoc, listCounter, levelList);
    } else if (node.nodeName === "#text") {
      newEle = createMyTextNode(node, xmlDoc);
    } else if (node.nodeName === "IMG") {
      newEle = xmlDoc.createElement("w:Noinsert");
    } else if (node.nodeName === "TABLE") {
      newEle = createTableNode(xmlDoc);
    } else if (node.nodeName === "THEAD") {
      newEle = xmlDoc.createElement("w:Noinsert");
    } else if (node.nodeName === "TBODY") {
      newEle = xmlDoc.createElement("w:Noinsert");
    } else if (node.nodeName === "TR") {
      newEle = createNodeTR(xmlDoc);
      cols = 0;
      for (let c = 0; c < node.childNodes.length; c++) {
        if (node.childNodes[c].nodeName === "TD") {
          cols++;
        }
      }
      if (cols == 0) {
        const tdElement = document.createElement("TD");
        node.appendChild(tdElement);
      }
    } else if (node.nodeName === "TD") {
      newEle = createNodeTD(node, xmlDoc, cols);
    } else if (node.nodeName === "BLOCKQUOTE") {
      newEle = createNodeBlockquote(xmlDoc);
    } else {
      newEle = createNodeParagraphOrRun(node, xmlDoc);
    }

    return newEle;
  }

  createNodeXML(nodeParent[0], xmlDoc, parentXML);

  relsDocumentXML =
    relsDocumentXML +
    '<Relationship Id="Rnumbering1" Target="/word/numbering.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering"/>';
  relsDocumentXML = relsDocumentXML + "</Relationships>";

  zip.file("word/_rels/document.xml.rels", relsDocumentXML);

  const bodyElement = xmlDoc.getElementsByTagName("w:body")[0];

  const wordProcessingMLNamespace =
    "http://schemas.openxmlformats.org/wordprocessingml/2006/main";

  const sectPr = xmlDoc.createElementNS(wordProcessingMLNamespace, "w:sectPr");
  const pgSz = xmlDoc.createElementNS(wordProcessingMLNamespace, "w:pgSz");
  pgSz.setAttribute("w:w", "14003"); // 24.7cm in twips, for landscape
  pgSz.setAttribute("w:h", "9071"); // 16cm in twips, for landscape
  pgSz.setAttribute("w:orient", "landscape");
  sectPr.appendChild(pgSz);

  const pgMar = xmlDoc.createElementNS(wordProcessingMLNamespace, "w:pgMar");
  pgMar.setAttribute("w:top", "720"); // 0.5 inch
  pgMar.setAttribute("w:right", "720");
  pgMar.setAttribute("w:bottom", "720");
  pgMar.setAttribute("w:left", "720");
  pgMar.setAttribute("w:header", "720");
  pgMar.setAttribute("w:footer", "720");
  pgMar.setAttribute("w:gutter", "0");
  sectPr.appendChild(pgMar);

  bodyElement.appendChild(sectPr);

  const content = createDocx(bodyElement.outerHTML, zip);

  return content;
}
