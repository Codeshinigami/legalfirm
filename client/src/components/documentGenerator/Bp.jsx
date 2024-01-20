import React from 'react'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';



export default function Bp() {
    //const {degrees,PDFDocument, rgb, StandardFonts } = PDFLib

    async function modifyPdf() {
    let effective_date = document.querySelector("#effective-date").value;
    let employeeName = document.querySelector("#employeeName").value;
    let employeeAddress = document.querySelector("#employeeAddress").value;
    let employerName = document.querySelector("#employerName").value;
    let employerAddress = document.querySelector("#employerAddress").value;
    let landDiscription1 = document.querySelector("#landDiscription1").value;
    let landDiscription2 = document.querySelector("#landDiscription2").value;
    let landDiscription3 = document.querySelector("#landDiscription3").value;
    let leaseStartDate = document.querySelector("#leaseStartDate").value;
    let leaseEndDate = document.querySelector("#leaseStartDate").value;
    let totalMonths = document.querySelector("#totalMonths").value;
    let monthlyAmount = document.querySelector("#monthlyAmount").value;
    let landUse = document.querySelector("#landUse").value;
    let proAct = document.querySelector("#proAct").value;
    let minInsurance = document.querySelector("#minInsurance").value;
    let daysNotice = document.querySelector("#daysNotice").value;
    let securityDeposit = document.querySelector("#securityDeposit").value;
    let defaultAmount = document.querySelector("#defaultAmount").value;


    
      // Fetch an existing PDF document
      const existingPdfBytes = await fetch(
        "https://raw.githubusercontent.com/RehanChalana/tech-hacks-work/main/LandLease.pdf"
      ).then((res) => res.arrayBuffer());
    console.log(existingPdfBytes)
    //   var bytes = new Uint8Array(existingPdfBytes);
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

      // Embed the Helvetica font
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

      // Get the first page of the document
      const pages = pdfDoc.getPages()
      const firstPage = pages[0]
      const secondPage = pages[1]

      // Get the width and height of the first page
      //const { width, height } = firstPage.getSize()

      // Draw a string of text diagonally across the first page
    firstPage.drawText(effective_date,{x:80,y:692,size:10,font: helveticaFont,
    color: rgb(0, 0, 0),})
    firstPage.drawText(employeeName,{x:195,y:665,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(employeeAddress,{x:195,y:652,size:12,font: helveticaFont,
    color: rgb(0, 0, 0),})
    firstPage.drawText(employerName,{x:190,y:614,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(employerAddress,{x:382,y:614,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(landDiscription1,{x:90,y:475,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(landDiscription2,{x:90,y:462,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(landDiscription3,{x:90,y:448,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(leaseStartDate,{x:183,y:364,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(leaseEndDate,{x:324,y:364,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(totalMonths,{x:90,y:351,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(monthlyAmount,{x:193,y:295,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(landUse,{x:270,y:226,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(proAct,{x:150,y:212,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText('Maintaince',{x:165,y:142,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    // const secondPage = pages[1];
    secondPage.drawText(minInsurance,{x:395,y:757,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    secondPage.drawText(daysNotice,{x:78,y:662,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    secondPage.drawText(securityDeposit,{x:185,y:578,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    secondPage.drawText(defaultAmount,{x:185,y:513,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    secondPage.drawText(employeeName,{x:95,y:382,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    secondPage.drawText(employerName,{x:325,y:382,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    secondPage.drawText(employeeName,{x:95,y:344,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    secondPage.drawText(employerName,{x:335,y:344,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    secondPage.drawText(new Date().toDateString(),{x:95,y:300,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    secondPage.drawText(new Date().toDateString(),{x:335,y:300,size:13,font: helveticaFont,
        color: rgb(0, 0, 0),})
    //   Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()
		// Trigger the browser to download the PDF document
      download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
    }
  return (

<div class="w-full p-8 bg-white rounded-lg shadow-md flex-row">
<p class="mb-4">
    Click the button to modify an existing PDF document with{" "}
    <code class="bg-gray-200 p-1">pdf-lib</code>
  </p>

  <h2 class="text-2xl font-bold mb-6">Agreement details</h2>

  <label class="block text-gray-700">Effective Date</label>
  <input type="date" id="effective-date" class="form-input mb-4 focus:ring focus:ring-blue-300"/>

  <h4 class="text-lg font-bold mb-2">Employee details</h4>
  <input id="employeeName" type="text" placeholder="Employee Name" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="employeeAddress" type="text" placeholder="Employee Address" class="form-input mb-6 focus:ring focus:ring-blue-300"/>

  <h4 class="text-lg font-bold mb-2">Employer details</h4>
  <input id="employerName" type="text" placeholder="Employer Name" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="employerAddress" type="text" placeholder="Employer Address" class="form-input mb-6 focus:ring focus:ring-blue-300"/>

  <h4 class="text-lg font-bold mb-2">Land description</h4>
  <input id="landDiscription1" type="text" placeholder="Land description 1" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="landDiscription2" type="text" placeholder="Land description 2" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="landDiscription3" type="text" placeholder="Land description 3" class="form-input mb-6 focus:ring focus:ring-blue-300"/>

  <h4 class="text-lg font-bold mb-2">Term details</h4>
  <label class="block text-gray-700">Lease begins on</label>
  <input id="leaseStartDate" type="date" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <label class="block text-gray-700">Lease ends on</label>
  <input id="leaseEndDate" type="date" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="totalMonths" type="number" placeholder="Total Months" class="form-input mb-6 focus:ring focus:ring-blue-300"/>

  <h4 class="text-lg font-bold mb-2">Rent details</h4>
  <input id="monthlyAmount" type="number" placeholder="Monthly amount to pay" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="landUse" type="text" placeholder="Land can be used for" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="proAct" type="text" placeholder="Prohibited Activities" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="minInsurance" type="number" placeholder="Min Amount of insurance" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="daysNotice" type="number" placeholder="Days before notice" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="securityDeposit" type="number" placeholder="Security deposit" class="form-input mb-2 focus:ring focus:ring-blue-300"/>
  <input id="defaultAmount" type="number" placeholder="Default amount per month" class="form-input mb-6 focus:ring focus:ring-blue-300"/>
  <button onClick={() => modifyPdf()}>Modify PDF</button>
    <p class="small">(Your browser will download the resulting file)</p>
</div>
  )
}
