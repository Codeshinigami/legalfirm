import React from 'react'

export default function Nda() {
    const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

    async function modifyPdf() {
      let date = document.querySelector("#date").value;
      let companyA = document.querySelector("#companyA").value;
      let companyAOffice = document.querySelector("#companyAOffice").value;
      let companyAReferredAs = document.querySelector("#companyAreferredAs").value;
      let companyB = document.querySelector("#companyB").value;
      let companyBOffice = document.querySelector("#companyBOffice").value;
      let companyBReferredAs = document.querySelector("#companyBreferredAs").value;
      let purpose = document.querySelector("#purpose").value;
      let terminationYears = document.querySelector("#terminationYears").value;
      let expiryYears = document.querySelector("#expiryYears").value;
      
      // Fetch an existing PDF document
      const existingPdfBytes = await fetch(
        "https://raw.githubusercontent.com/RehanChalana/tech-hacks-work/main/ilovepdf_merged.pdf"
      ).then((res) => res.arrayBuffer());
    //   var bytes = new Uint8Array(existingPdfBytes);


      // Load a PDFDocument from the existing PDF bytes
      const pdfDoc = await PDFDocument.load(existingPdfBytes)

      // Embed the Helvetica font
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const courierFont = await pdfDoc.embedFont(StandardFonts.Courier);

      // Get the first page of the document
      const pages = pdfDoc.getPages()
      const firstPage = pages[0]
      const fourthPage = pages[3]
      const fifthPage = pages[4]
      const sixthPage = pages[5]

      //const secondPage = pages[1]

      // Get the width and height of the first page
      const { width, height } = firstPage.getSize()

      // Draw a string of text diagonally across the first page
      console.log(date);
    firstPage.drawText(new Date(date).getDay().toString(),{x:246,y:610,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(new Date(date).toLocaleString('en-US', { month: 'long' }),{x:332,y:610,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(companyA,{x:92,y:550,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(companyAOffice,{x:260,y:537,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(companyAReferredAs,{x:168,y:520,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(companyB,{x:110,y:448,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(companyBOffice,{x:312,y:434,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(companyBReferredAs,{x:165,y:417,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(companyAReferredAs,{x:90,y:360,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(companyBReferredAs,{x:213,y:360,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(purpose,{x:94,y:273,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    fourthPage.drawText(terminationYears,{x:145,y:97,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    fourthPage.drawText(expiryYears,{x:145,y:81,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    fifthPage.drawText(companyAReferredAs,{x:145,y:375,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    fifthPage.drawText(companyBReferredAs,{x:405,y:375,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    sixthPage.drawText(companyA,{x:195,y:409,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    sixthPage.drawText(companyB,{x:422,y:409,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})

      

   // firstPage.drawText("helloworlddbsm".split('').join('     '),{x:164,y:866,size:12,width:100,font: helveticaFont,
     //   color: rgb(0, 0, 0),})

   // drawInBox("helloworlddbsmfsf",164,851);


      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()
		// Trigger the browser to download the PDF document
      download(pdfBytes, "NDA.pdf", "application/pdf");
    }
  return (
    <>
  <meta charSet="utf-8" />
  <div className="p-4 flex flex-col">
    <p className="mb-4">
      Click the button to modify an existing PDF document with{" "}
      <code className="bg-gray-200 p-1">pdf-lib</code>
    </p>
    <input id="date" type="date" className="form-input mb-4 border-b-2 border-purple-500 px-3 py-1 rounded-md" />
    <input id="companyA" placeholder="Company A" className="form-input mb-4 border-b-2 border-purple-500 px-3 py-1 rounded-md" />
    <input id="companyAOffice" placeholder="Company A Office" className="form-input mb-4 border-b-2 border-purple-500 px-3 py-1 rounded-md" />
    <input id="companyAreferredAs" placeholder="Referred as" className="form-input mb-4 border-b-2 border-purple-500 px-3 py-1 rounded-md" />
    <input id="companyB" placeholder="Company B" className="form-input mb-4 border-b-2 border-purple-500 px-3 py-1 rounded-md" />
    <input id="companyBOffice" placeholder="Company B Office" className="form-input mb-4 border-b-2 border-purple-500 px-3 py-1 rounded-md" />
    <input id="companyBreferredAs" placeholder="Referred as" className="form-input mb-4 border-b-2 border-purple-500 px-3 py-1 rounded-md" />
    <input id="purpose" placeholder="Purpose of Relation" className="form-input mb-4 border-b-2 border-purple-500 px-3 py-1 rounded-md" />
    <input id="terminationYears" placeholder="Years for Termination" className="form-input mb-4 border-b-2 border-purple-500 px-3 py-1 rounded-md" />
    <input id="expiryYears" placeholder="Years for Expiry" className="form-input mb-4 border-b-2 border-purple-500 px-3 py-1 rounded-md" />
    <div>
  <button class="border-2 border-black bg-blue-400 rounded-md px-2 py-1" onClick={() => modifyPdf()}>Download PDF</button>
  </div>
    <p className="text-sm">(Your browser will download the resulting file)</p>
  </div>
</>

  )
}
