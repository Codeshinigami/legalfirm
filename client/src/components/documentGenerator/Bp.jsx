import React from 'react'

export default function Bp() {
    const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

    async function modifyPdf() {
      // getting input data
      let effectiveDate = document.querySelector("#effectiveDate").value;
      let partner1Name = document.querySelector("#partner1Name").value;
      let partner1Address = document.querySelector("#partner1Address").value;
      let partner2Name = document.querySelector("#partner2Name").value;
      let partner2Address = document.querySelector("#partner2Address").value;
      let purpose_1 = document.querySelector("#purpose-1").value;
      let purpose_2 = document.querySelector("#purpose-2").value;
      let purpose_3 = document.querySelector("#purpose-3").value;
      let purpose_4 = document.querySelector("#purpose-4").value;
      let purpose_5 = document.querySelector("#purpose-5").value;
      let location = document.querySelector("#businessLocation").value;
      
      // Fetch an existing PDF document
      const url = 'BPagreement.pdf';
  	  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

      // Load a PDFDocument from the existing PDF bytes
      const pdfDoc = await PDFDocument.load(existingPdfBytes)

      // Embed the Helvetica font
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

      // Get the first page of the document
      const pages = pdfDoc.getPages()
      const firstPage = pages[0]
      const secondPage = pages[1]

      // Get the width and height of the first page
      const { width, height } = firstPage.getSize()

      // Draw a string of text diagonally across the first page
      firstPage.drawText(effectiveDate,{x:120,y:697,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(partner1Name,{x:130,y:668,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(partner1Address,{x:130,y:641,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(partner2Name,{x:290,y:668,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(partner2Address,{x:290,y:641,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(purpose_1,{x:90,y:514,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(purpose_2,{x:90,y:496,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(purpose_3,{x:90,y:481,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(purpose_4,{x:90,y:466,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(purpose_5,{x:90,y:450,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(location,{x:334,y:320,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(partner1Name,{x:90,y:210,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(partner1Address,{x:325,y:210,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(partner1Name,{x:90,y:170,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(partner2Name,{x:325,y:170,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(new Date().toDateString(),{x:90,y:128,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(new Date().toDateString(),{x:325,y:128,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()
		// Trigger the browser to download the PDF document
      download(pdfBytes, "BP.pdf", "application/pdf");
    }
  return (
    <>
  <meta charSet="utf-8" />
  <p>
    Click the button to modify an existing PDF document with{" "}
    <code>pdf-lib</code>
  </p>
  <div className="form">
    <h2>Agreement details</h2>
    <label>Effective date</label>
    <input id="effectiveDate" type="date" />
    <h4>Partners details</h4>
    <input id="partner1Name" type="text" placeholder="Partner-1 Name" />
    <input id="partner1Address" type="text" placeholder="Partner-1 Address" />
    <h4>Employer details</h4>
    <input id="partner2Name" type="text" placeholder="Partner-2 Name" />
    <input id="partner2Address" type="text" placeholder="Partner-2 Address" />
    <h4>PURPOSE OF PARTNERSHIP</h4>
    <input id="purpose-1" type="text" placeholder="Purpose-1" />
    <input id="purpose-2" type="text" placeholder="purpose-2" />
    <input id="purpose-3" type="text" placeholder="purpose-3" />
    <input id="purpose-4" type="text" placeholder="purpose-4" />
    <input id="purpose-5" type="text" placeholder="purpose-5" />
    <h4>BUSINESS LOCATION</h4>
    <input id="businessLocation" type="text" placeholder="business location" />
  </div>
  <button onClick={()=>{modifyPdf()}}>Modify PDF</button>
  <p className="small">(Your browser will download the resulting file)</p>
</>

  )
}
