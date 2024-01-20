import React from 'react'

export default function Ip() {
    const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

    async function modifyPdf() {
      // getting input data
      let effectiveDate = document.querySelector("#effectiveDate").value;
      let employeeName = document.querySelector("#employeeName").value;
      let employeeAddress = document.querySelector("#employeeAddress").value;
      let employerName = document.querySelector("#employerName").value;
      let employerAddress = document.querySelector("#employerAddress").value;
      let property_1 = document.querySelector("#property-1").value;
      let property_2 = document.querySelector("#property-2").value;
      let commence_date = document.querySelector("#comence-date").value;
      let terminate_date = document.querySelector("#terminate-date").value;
      let legal_framework = document.querySelector("#legal-framework").value;
      
      // Fetch an existing PDF document
      const url = 'IP.pdf';
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
    firstPage.drawText(effectiveDate,{x:94,y:702,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(employeeName,{x:158,y:674,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(employeeAddress,{x:339,y:674,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(employerName,{x:161,y:625,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(employerAddress,{x:161,y:608,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(property_1,{x:110,y:390,size:14,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(property_2,{x:110,y:375,size:14,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(commence_date,{x:228,y:320,size:10,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(terminate_date,{x:368,y:320,size:10,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(legal_framework,{x:345,y:237,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),}) 
    firstPage.drawText(employeeName,{x:110,y:154,size:14,font: helveticaFont,
        color: rgb(0, 0, 0),}) 
    firstPage.drawText(employerName,{x:356,y:154,size:14,font: helveticaFont,
        color: rgb(0, 0, 0),}) 
    firstPage.drawText(employeeName,{x:110,y:112,size:14,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(employerName,{x:356,y:112,size:14,font: helveticaFont,
        color: rgb(0, 0, 0),})
          
          
    secondPage.drawText(new Date().toDateString(),{x:110,y:760,size:14,font: helveticaFont,
        color: rgb(0, 0, 0),})
    secondPage.drawText(new Date().toDateString(),{x:356,y:760,size:14,font: helveticaFont,
        color: rgb(0, 0, 0),})

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()
		// Trigger the browser to download the PDF document
      download(pdfBytes, "IP.pdf", "application/pdf");
    }
  return (
    <>
  <meta charSet="utf-8" />
  <div class="p-4">
  <p class="mb-4">
    Click the button to modify an existing PDF document with{" "}
    <code class="bg-gray-200 p-1">pdf-lib</code>
  </p>
  <div class="form">
    <h2 class="text-2xl font-bold mb-4">Agreement details</h2>
    <label class="block mb-2">Effective Date</label>
    <input id="effectiveDate" type="date" class="form-input mb-4" />
    <h4 class="text-lg font-bold mb-2">Employee details</h4>
    <input id="employeeName" type="text" placeholder="Employee Name" class="form-input mb-2" />
    <input id="employeeAddress" type="text" placeholder="Employee Address" class="form-input mb-4" />
    <h4 class="text-lg font-bold mb-2">Employer details</h4>
    <input id="employerName" type="text" placeholder="Employer Name" class="form-input mb-2" />
    <input id="employerAddress" type="text" placeholder="Employer Address" class="form-input mb-4" />
    <h4 class="text-lg font-bold mb-2">RECOGNITION OF PRE-EXISTING PROPERTY</h4>
    <input id="property-1" type="text" placeholder="Property-1" class="form-input mb-2" />
    <input id="property-2" type="text" placeholder="Property-2" class="form-input mb-4" />
    <h4 class="text-lg font-bold mb-2">TERM OF AGREEMENT</h4>
    <label class="block mb-2">This Agreement commences on</label>
    <input id="commence-date" type="date" class="form-input mb-2" />
    <label class="block mb-2">This Agreement terminates on</label>
    <input id="terminate-date" type="date" class="form-input mb-2" />
    <input id="legal-framework" type="number" placeholder="Legal Framework" class="form-input mb-4" />
  </div>
  <button onclick="modifyPdf()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
    Modify PDF
  </button>
  <p class="text-sm">(Your browser will download the resulting file)</p>
</div>

</>

  )
}
