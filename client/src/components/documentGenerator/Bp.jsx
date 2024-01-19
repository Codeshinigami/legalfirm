import React from 'react'

export default function Bp() {

    const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

    async function modifyPdf() {
      // getting inputs
    let cityName = document.querySelector("#city").value;
    let department = document.querySelector("#department").value;
    let state = document.querySelector("#state").value;
    let tehsil = document.querySelector("#tehsil").value;
    let district = document.querySelector("#district").value;
    let name = document.querySelector("#name").value;
    let sex = document.querySelector("#sex").value;
    let dateOfBirth = document.querySelector("#dateOfBirth").value;
    let placeOfBirth = document.querySelector("#placeOfBirth").value;
    let nameOfMother = document.querySelector("#nameOfMother").value;
    let uid_mother = document.querySelector("#uid-mother").value;
    let nameOfFather = document.querySelector("#nameOfFather").value;
    let uid_father = document.querySelector("#uid-father").value;
    let birthAddress1 = document.querySelector("#birthAddress1").value;
    let birthAddress2 = document.querySelector("#birthAddress2").value;
    let birthAddress3 = document.querySelector("#birthAddress3").value;
    let birthAddress4 = document.querySelector("#birthAddress4").value;
    let perAddress1 = document.querySelector("#perAddress1").value;
    let perAddress2 = document.querySelector("#perAddress2").value;
    let perAddress3 = document.querySelector("#perAddress3").value;
    let perAddress4 = document.querySelector("#perAddress4").value;
      // Fetch an existing PDF document
      const url = 'birth-certificate.pdf'
  	  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

      // Load a PDFDocument from the existing PDF bytes
      const pdfDoc = await PDFDocument.load(existingPdfBytes)

      // Embed the Helvetica font
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

      // Get the first page of the document
      const pages = pdfDoc.getPages()
      const firstPage = pages[0]

      // Get the width and height of the first page
      const { width, height } = firstPage.getSize()

      // Draw a string of text diagonally across the first page
    firstPage.drawText('India',{x:270,y:752,size:15,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText('India',{x:335,y:738,size:15,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(department,{x:154,y:725,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText("Birth Control",{x:315,y:725,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText("Birth Control",{x:243,y:697,size:10,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(department,{x:315,y:697,size:10,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(state,{x:335,y:617,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText("2006",{x:155,y:593,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(state,{x:155,y:555,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText("2006",{x:430,y:555,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})  
    firstPage.drawText(department+"  "+cityName,{x:138,y:505,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(tehsil,{x:155,y:492,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(district,{x:155,y:474,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(state,{x:340,y:474,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(department+"  "+cityName,{x:328,y:426,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(tehsil,{x:302,y:415,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(district,{x:150,y:415,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(state,{x:150,y:403,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(name,{x:180,y:380,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(sex,{x:180,y:365,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(dateOfBirth,{x:220,y:350,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(placeOfBirth,{x:230,y:335,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(nameOfMother,{x:247,y:320,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(uid_mother,{x:329,y:300,size:12,font: helveticaFont,
      color: rgb(0, 0, 0),})
    firstPage.drawText(nameOfFather,{x:290,y:273,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(uid_father,{x:320,y:250,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(birthAddress1,{x:150,y:210,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(birthAddress2,{x:150,y:199,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(birthAddress3,{x:150,y:187,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(birthAddress4,{x:150,y:176,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(perAddress1,{x:400,y:210,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(perAddress2,{x:400,y:199,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(perAddress3,{x:400,y:187,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(perAddress4,{x:400,y:176,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(Math.floor(Math.random() * (10000 - 1000 + 1)).toString(),{x:255,y:160,size:12,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(new Date().toDateString(),{x:459,y:160,size:10,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText('remarks',{x:240,y:147,size:10,font: helveticaFont,
        color: rgb(0, 0, 0),})
    firstPage.drawText(new Date().toDateString(),{x:255,y:132,size:7,font: helveticaFont,
        color: rgb(0, 0, 0),})
      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()
		// Trigger the browser to download the PDF document
      download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
    }


  return (
    <>
  <meta charSet="utf-8" />
  <p>
    Click the button to modify an existing PDF document with{" "}
    <code>pdf-lib</code>
  </p>
  <div className="form">
    <h2>Local body details</h2>
    <select id="department">
      <option>Gram-panchyat</option>
      <option>Municipal Council</option>
    </select>
    <input id="city" type="text" placeholder="city/village" />
    <input id="state" type="text" placeholder="State" />
    <input id="tehsil" type="text" placeholder="tehsil" />
    <input id="district" type="text" placeholder="district" />
    <h2>Personal Details</h2>
    <input id="name" type="text" placeholder="name" />
    <select id="sex">
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
    <input id="dateOfBirth" type="date" placeholder="Date Of Birth" />
    <input id="placeOfBirth" type="text" placeholder="place Of Birth" />
    <input id="nameOfMother" type="text" placeholder="Name of Mother" />
    <input id="uid-mother" type="text" placeholder="UID no. of mother" />
    <input id="nameOfFather" type="text" placeholder="Name of Father" />
    <input id="uid-father" type="text" placeholder="UID no. of father" />
    <h3>Address of the parents at the of birth</h3>
    <input id="birthAddress1" type="text" placeholder="Address line 1" />
    <input id="birthAddress2" type="text" placeholder="Address line 2" />
    <input id="birthAddress3" type="text" placeholder="Address line 3" />
    <input id="birthAddress4" type="text" placeholder="Address line 4" />
    <h3>permanent Address of parents</h3>
    <input id="perAddress1" type="text" placeholder="Address line 1" />
    <input id="perAddress2" type="text" placeholder="Address line 2" />
    <input id="perAddress3" type="text" placeholder="Address line 3" />
    <input id="perAddress4" type="text" placeholder="Address line 4" />
  </div>
  <button onClick={()=>{modifyPdf()}}>Modify PDF</button>
  <p className="small">(Your browser will download the resulting file)</p>
</>

  )
}
