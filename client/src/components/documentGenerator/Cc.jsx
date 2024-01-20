import React from 'react'

export default function Cc() {
  const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

    async function modifyPdf() {
        // getting inputs
        let caseType = document.querySelector("#caseType").value;
        let name1 = document.querySelector("#name1").value;
        let name2 = document.querySelector("#name2").value;
        let fatherName1 = document.querySelector("#fatherName1").value;
        let fatherName2 = document.querySelector("#fatherName2").value;
        let address1 = document.querySelector("#address1").value;
        let address2 = document.querySelector("#address1").value;
        let gender = document.querySelector("#gender").value;
        let age = document.querySelector("#age").value;
        let caste = document.querySelector("#caste").value;
        let mail = document.querySelector("#mail").value;
        let phone = document.querySelector("#phone").value;
        let mobile = document.querySelector("#mobile").value;
        let adName = document.querySelector("#adName").value;
        let adID = document.querySelector("#adID").value;
        let adPhone = document.querySelector("#adPhone").value;

        let opname1 = document.querySelector("#opname1").value;
        let opname2 = document.querySelector("#opname2").value;
        let opfatherName1 = document.querySelector("#opfatherName1").value;
        let opfatherName2 = document.querySelector("#opfatherName2").value;
        let opaddress1 = document.querySelector("#opaddress1").value;
        let opaddress2 = document.querySelector("#opaddress1").value;
        let opgender = document.querySelector("#opgender").value;
        let opage = document.querySelector("#opage").value;
        let opcaste = document.querySelector("#opcaste").value;
        let opmail = document.querySelector("#opmail").value;
        let opphone = document.querySelector("#opphone").value;
        let opmobile = document.querySelector("#opmobile").value;
        let opadName = document.querySelector("#opadName").value;
        let opadID = document.querySelector("#opadID").value;
        let opadPhone = document.querySelector("#opadPhone").value;
        

        


        let policeStation = document.querySelector("#policeStation").value;
        let fir = document.querySelector("#fir").value;
        let firYear = document.querySelector("#firYear").value;
        let dateOfOffence = document.querySelector("#dateOfOffence").value;
      // Fetch an existing PDF document
      const existingPdfBytes = await fetch(
        "https://raw.githubusercontent.com/RehanChalana/tech-hacks-work/main/CriminalCaseForm.pdf"
      ).then((res) => res.arrayBuffer());

      // Load a PDFDocument from the existing PDF bytes
      const pdfDoc = await PDFDocument.load(existingPdfBytes)

      // Embed the Helvetica font
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const courierFont = await pdfDoc.embedFont(StandardFonts.Courier);

      // Get the first page of the document
      const pages = pdfDoc.getPages()
      const firstPage = pages[0]
      const secondPage = pages[1]

      // Get the width and height of the first page
      const { width, height } = firstPage.getSize()

      // Draw a string of text diagonally across the first page
    firstPage.drawText(caseType,{x:104,y:900,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
   // firstPage.drawText("helloworlddbsm".split('').join('     '),{x:164,y:866,size:12,width:100,font: helveticaFont,
     //   color: rgb(0, 0, 0),})
    drawInBox(name1,164,866);
    drawInBox(name2,164,851);
    drawInBox(fatherName1,164,828);
    drawInBox(fatherName2,164,813);
    firstPage.drawText(address1,{x:164,y:787,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(address2,{x:164,y:770,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    if(gender="male"){
        firstPage.drawText(gender,{x:211,y:744,size:12,font: helveticaFont,
            color: rgb(0, 0, 0),})
    } else{
        firstPage.drawText(gender,{x:308,y:744,size:12,font: helveticaFont,
            color: rgb(0, 0, 0),})
    }
    
    firstPage.drawText(age,{x:407,y:744,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(caste,{x:504,y:744,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(mail,{x:210,y:720,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(phone,{x:356,y:720,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(mobile,{x:478,y:720,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(adName,{x:160,y:697,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(adID,{x:382,y:697,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(adPhone,{x:480,y:697,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    drawInBox(opname1,164,653);
    drawInBox(opname2,164,639);
    drawInBox(opfatherName1,164,615);
    drawInBox(opfatherName2,164,600);
    firstPage.drawText(opaddress1,{x:164,y:573,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(opaddress2,{x:164,y:557,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
        if(gender=="male"){
            firstPage.drawText(gender,{x:210,y:530,size:12,font: helveticaFont,
                color: rgb(0, 0, 0),})
        } else{
            firstPage.drawText(gender,{x:308,y:530,size:12,font: helveticaFont,
                color: rgb(0, 0, 0),})
        }
    firstPage.drawText(opage,{x:405,y:530,size:12,font: helveticaFont,
         color: rgb(0, 0, 0),})
    firstPage.drawText(opcaste,{x:504,y:530,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(opmail,{x:210,y:509,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(opphone,{x:356,y:509,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(opmobile,{x:479,y:509,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(opadName,{x:164,y:484,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(opadID,{x:382,y:484,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(opadPhone,{x:480,y:484,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(policeStation,{x:164,y:438,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(fir,{x:164,y:410,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(firYear,{x:300,y:410,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(dateOfOffence,{x:486,y:410,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    
   // drawInBox("helloworlddbsmfsf",164,851);


    function drawInBox(text,x,y){
        for(let i=0;i<text.length;i++){
            firstPage.drawText(text.charAt(i),{x:x,y:y,size:12,font:courierFont,color:rgb(0,0,0)})
            x=x+25;
        }
    }
 

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()
		// Trigger the browser to download the PDF document
      download(pdfBytes, "CriminalCaseForm.pdf", "application/pdf");
    }
  return (
    <>
  <meta charSet="utf-8" />
  <div className="p-4">
    <p className="mb-4">
      Please provide the required details to generate the document.
    </p>
    <div className="form grid grid-cols-2 gap-4">
    <h4 className="col-span-2 text-lg font-bold mb-2">Applicant details</h4>
      <input id="caseType" placeholder="Case Type" className="form-input mb-4" />
      <input id="name1" placeholder="Name" className="form-input mb-4" />
      <input id="name2" placeholder="Name" className="form-input mb-4" />
      <input id="fatherName1" placeholder="Father Name 1" className="form-input mb-4" />
      <input id="fatherName2" placeholder="Father Name 2" className="form-input mb-4" />
      <input id="address1" placeholder="Address 1" className="form-input mb-4" />
      <input id="address2" placeholder="Address 2" className="form-input mb-4" />
      <select id="gender" className="form-select mb-4">
        <option>Male</option>
        <option>Female</option>
      </select>
      <input id="age" placeholder="Age" type="number" className="form-input mb-4" />
      <input id="caste" placeholder="Caste" className="form-input mb-4" />
      <input id="mail" placeholder="E-mail" className="form-input mb-4" />
      <input id="phone" placeholder="Phone" className="form-input mb-4" />
      <input id="mobile" placeholder="Mobile" className="form-input mb-4" />
      <input id="adName" placeholder="Advocate Name" className="form-input mb-4" />
      <input id="adID" placeholder="Advocate CIS CODE" className="form-input mb-4" />
      <input id="adPhone" placeholder="Advocate Phone Number" className="form-input mb-4" />

      <h4 className="col-span-2 text-lg font-bold mb-2">Opponent details</h4>
      <input id="opcaseType" placeholder="Case Type" className="form-input mb-4" />
      <input id="opname1" placeholder="Name" className="form-input mb-4" />
      <input id="opname2" placeholder="Name" className="form-input mb-4" />
      <input id="opfatherName1" placeholder="Father Name 1" className="form-input mb-4" />
      <input id="opfatherName2" placeholder="Father Name 2" className="form-input mb-4" />
      <input id="opaddress1" placeholder="Address 1" className="form-input mb-4" />
      <input id="opaddress2" placeholder="Address 2" className="form-input mb-4" />
      <select id="opgender" className="form-select mb-4">
        <option>Male</option>
        <option>Female</option>
      </select>
      <input id="opage" placeholder="Age" type="number" className="form-input mb-4" />
      <input id="opcaste" placeholder="Caste" className="form-input mb-4" />
      <input id="opmail" placeholder="E-mail" className="form-input mb-4" />
      <input id="opphone" placeholder="Phone" className="form-input mb-4" />
      <input id="opmobile" placeholder="Mobile" className="form-input mb-4" />
      <input id="opadName" placeholder="Advocate Name" className="form-input mb-4" />
      <input id="opadID" placeholder="Advocate CIS CODE" className="form-input mb-4" />
      <input id="opadPhone" placeholder="Advocate Phone Number" className="form-input mb-4" />

      <h4 className="col-span-2 text-lg font-bold mb-2">Police station details</h4>
      <input id="policeStation" placeholder="Police Station" className="form-input mb-4" />
      <input id="fir" placeholder="FIR Number" className="form-input mb-4" />
      <input id="firYear" placeholder="FIR Year" className="form-input mb-4" />
      <input id="dateOfOffence" type="date" className="form-input mb-4" />
    </div>
    <button
      onClick={() => modifyPdf()}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
    >
      Modify PDF
    </button>
    <p className="text-sm">(Your browser will download the resulting file)</p>
  </div>
</>


  )
}
