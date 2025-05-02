// ====== Validating the Name and Class ======
const studentName = document.getElementById('studentName')
const studentClass = document.getElementById('studentClass')
const displayName = document.querySelector('.theName')
const displayClass = document.querySelector('.theClass')
// THE BUTTON TO CONTROL THE EVENT
const submitCredentials = document.getElementById('submitCredentials')
// ==== Adding the eventListener
submitCredentials.addEventListener('click' , ()=>{
    displayName.innerHTML = studentName.value
    displayClass.innerHTML = studentClass.value
})

// localStorage.setItem("displayName", studentName.value)


// localStorage.getItem("displayName")

// === Working on the grading System
// All subjects and scores will be stored in an array of objects
// All value to each key corresponded to their IDs in HTML for easy extraction and integration
const subjects = [
    {subjectName: 'eng', caScore: 'engCA', exScore: 'engEx', getScore: 'engTotal', subjectScore: 'engScore', subjectGrade: 'engGrade'},
    {subjectName: 'mth', caScore: 'mthCA', exScore: 'mthEx', getScore: 'mthTotal', subjectScore: 'mthScore', subjectGrade: 'mthGrade'},
    {subjectName: 'mth', caScore: 'phyCA', exScore: 'phyEx', getScore: 'phyTotal', subjectScore: 'phyScore', subjectGrade: 'phyGrade'},
    {subjectName: 'chem', caScore: 'chemCA', exScore: 'chemEx', getScore: 'chemTotal', subjectScore: 'chemScore', subjectGrade: 'chemGrade'},
    {subjectName: 'bio', caScore: 'bioCA', exScore: 'bioEx', getScore: 'bioTotal', subjectScore: 'bioScore', subjectGrade: 'bioGrade'},
    {subjectName: 'geo', caScore: 'geoCA', exScore: 'geoEx', getScore: 'geoTotal', subjectScore: 'geoScore', subjectGrade: 'geoGrade'},
    {subjectName: 'econ', caScore: 'econCA', exScore: 'econEx', getScore: 'econTotal', subjectScore: 'econScore', subjectGrade: 'econGrade'},
    {subjectName: 'yoruba', caScore: 'yorubaCA', exScore: 'yorubaEx', getScore: 'yorubaTotal', subjectScore: 'yorubaScore', subjectGrade: 'yorubaGrade'},
]
// == Need to create a function that will extract each of the object and get asess to their keys
subjects.forEach((subject)=>{
    const caValue = document.getElementById(subject.caScore)
    const exValue = document.getElementById(subject.exScore)
    const getScoreButton = document.getElementById(subject.getScore)
    const calcScore = document.getElementById(subject.subjectScore)
    const grade = document.getElementById(subject.subjectGrade)

    // add eventListener to the button to calculate each score
    getScoreButton.addEventListener('click', ()=>{
        calcScore.innerHTML = Number(caValue.value) + Number(exValue.value)
        const calculatedScore = calcScore.innerHTML
        // Grading System
        if (calculatedScore < 39){grade.innerHTML = 'F'}
        else if (calculatedScore <= 40){grade.innerHTML = 'E'}
        else if (calculatedScore <= 49){grade.innerHTML = 'D'}
        else if (calculatedScore <= 54){grade.innerHTML = 'CD'}
        else if (calculatedScore <= 59){grade.innerHTML = 'C'}
        else if (calculatedScore <= 64){grade.innerHTML = 'BC'}
        else if (calculatedScore <= 69){grade.innerHTML = 'B'}
        else if (calculatedScore <= 74){grade.innerHTML = 'AB'}
        else {grade.innerHTML = 'A'}
    })
    // Validating the score of test and exam not been more than the require number of 40 and 60 respectively
    caValue.addEventListener('input', ()=>{
        if(caValue.value > 40){alert `Test score cannot be more than 40 marks` 
            caValue.value = ''}
    })
    exValue.addEventListener('input', ()=>{
        if(exValue.value > 60){alert `Exam score cannot be more than 60 marks`
            exValue.value = ''
        }
    })
})
// ====== Calculate for the average scores ========
const getAvButton = document.getElementById('avTotal')
const caAvTotal = document.getElementById('caAvTotal')
const exAvTotal = document.getElementById('exAvTotal')
const sumTotalAv = document.getElementById('overallAvTotal')
const avGrade = document.getElementById('avGrade')
// Extracting each of the CA into an array
const allCa = []
allCa[0] = +document.getElementById('engCA').value  // The + sign turns each data into a Number instead of the initial string data it is
allCa[1] = +document.getElementById('mthCA').value  // .value extract the value in the input
allCa[2] = +document.getElementById('phyCA').value
allCa[3] = +document.getElementById('chemCA').value
allCa[4] = +document.getElementById('bioCA').value
allCa[5] = +document.getElementById('geoCA').value
allCa[6] = +document.getElementById('econCA').value
allCa[7] = +document.getElementById('yorubaCA').value
// Extracting each of the Exam into an array
const allExam = []
allExam[0] = +document.getElementById('engEx').value
allExam[1] = +document.getElementById('mthEx').value
allExam[2] = +document.getElementById('phyEx').value
allExam[3] = +document.getElementById('chemEx').value
allExam[4] = +document.getElementById('bioEx').value
allExam[5] = +document.getElementById('geoEx').value
allExam[6] = +document.getElementById('econEx').value
allExam[7] = +document.getElementById('yorubaEx').value
// === EventHandler Button
getAvButton.addEventListener('click', ()=>{
    caAvTotal.innerHTML = Math.round(allCa.reduce((a,b)=>{return a + b}) / allCa.length)
    exAvTotal.innerHTML = Math.round(allExam.reduce((a,b)=>{return a + b}) / allExam.length)
    calculatedCaAv = +caAvTotal.innerHTML
    calculatedExAv = +exAvTotal.innerHTML
    sumTotalAv.innerHTML = calculatedCaAv + calculatedExAv
    calculatedAv = sumTotalAv.innerHTML
    // ----- Grading ----
    if (calculatedAv < 39){grade.innerHTML = 'F'}
    else if (calculatedAv <= 40){avGrade.innerHTML = 'E'}
    else if (calculatedAv <= 49){avGrade.innerHTML = 'D'}
    else if (calculatedAv <= 54){avGrade.innerHTML = 'CD'}
    else if (calculatedAv <= 59){avGrade.innerHTML = 'C'}
    else if (calculatedAv <= 64){avGrade.innerHTML = 'BC'}
    else if (calculatedAv <= 69){avGrade.innerHTML = 'B'}
    else if (calculatedAv <= 74){avGrade.innerHTML = 'AB'}
    else {avGrade.innerHTML = 'A'}
    // Result comments
    const resultContainer = document.querySelector('.resultTexts')
    const candidateName = document.getElementById('candidateName')
    const candidateAvScore = document.getElementById('candidateAvScore')
    const candidateGrade = document.getElementById('candidateGrade')
    const resultComment = document.getElementById('resultComment')
    candidateName.innerHTML = `${displayName.innerHTML}`
    candidateAvScore.innerHTML = `${calculatedAv}`
    candidateGrade.innerHTML = `${avGrade.innerHTML}`
    if (calculatedAv < 39){resultComment.innerHTML = 'A woeful Result, buckle up'}
    else if (calculatedAv <= 40){resultComment.innerHTML = 'A poor result, buckle up and do better'}
    else if (calculatedAv <= 49){resultComment.innerHTML = 'Not quiet Ok, Please work harder'}
    else if (calculatedAv <= 54){resultComment.innerHTML = 'An average result, invest more in your studies'}
    else if (calculatedAv <= 59){resultComment.innerHTML = 'A good result, you can do much better'}
    else if (calculatedAv <= 64){resultComment.innerHTML = 'A very good result, keep it up and even do better'}
    else if (calculatedAv <= 69){resultComment.innerHTML = 'Really good result, keep the fire burning'}
    else if (calculatedAv <= 74){resultComment.innerHTML = 'Great!! one of the very best, keep it up'}
    else {resultComment.innerHTML = `Great!!! keep it up, the sky is the limit`}
    resultContainer.style.display = 'grid'
})























































// // === Refactor of code after more studies to avoid Repetition (DRY) ====
// const studentName = document.getElementById('studentName')
// const studentClass = document.getElementById('studentClass')
// const theName = document.querySelector('.theName')
// const theClass = document.querySelector('.theClass')
// const submitInfo = document.getElementById('submitCredentials')
// // === Mapping the student inputed credentials to the required slot
// submitInfo.addEventListener('click' , ()=>{
//     theName.innerHTML = studentName.value
//     theClass.innerHTML = studentClass.value
// })
// // Storing each subjects and it characteristics in an array making sure the value tally with it ID for easy extraction
// const subjects = [
//     {subjectName: 'eng', CA: 'engCA', Exam: 'engEx', getScore: 'engTotal', totalScore: 'engScore', grade: 'engGrade'},
//     {subjectName: 'mth', CA: 'mthCA', Exam: 'mthEx', getScore: 'mthTotal', totalScore: 'mthScore', grade: 'mthGrade'},
//     {subjectName: 'phy', CA: 'phyCA', Exam: 'phyEx', getScore: 'phyTotal', totalScore: 'phyScore', grade: 'phyGrade'},
//     {subjectName: 'chem', CA: 'chemCA', Exam: 'chemEx', getScore: 'chemTotal', totalScore: 'chemScore', grade: 'chemGrade'},
//     {subjectName: 'bio', CA: 'bioCA', Exam: 'bioEx', getScore: 'bioTotal', totalScore: 'bioScore', grade: 'bioGrade'},
//     {subjectName: 'geo', CA: 'geoCA', Exam: 'geoEx', getScore: 'geoTotal', totalScore: 'geoScore', grade: 'geoGrade'},
//     {subjectName: 'econ', CA: 'econCA', Exam: 'econEx', getScore: 'econTotal', totalScore: 'econScore', grade: 'econGrade'},
//     {subjectName: 'yoruba', CA: 'yorubaCA', Exam: 'yorubaEx', getScore: 'yorubaTotal', totalScore: 'yorubaScore', grade: 'yorubaGrade'},
// ]
// // Extracting each of the subject as an entity
// subjects.forEach((subject)=>{
//     const caInput = document.getElementById(subject.CA)
//     const exInput = document.getElementById(subject.Exam)
//     const calcScore = document.getElementById(subject.getScore)
//     const totalScore = document.getElementById(subject.totalScore)
//     const grading = document.getElementById(subject.grade)

//     // == To get each calculation done
//     calcScore.addEventListener('click', ()=>{
//         const theCA = caInput.value
//         const theEx = exInput.value
//         totalScore.innerHTML = Number(theCA) + Number(theEx)
//         // == Creating the Grading system
//         if (totalScore.innerHTML < 39){grading.innerHTML = 'F'}
//         else if (totalScore.innerHTML <= 40){grading.innerHTML = 'E'}
//         else if (totalScore.innerHTML <= 49){grading.innerHTML = 'D'}
//         else if (totalScore.innerHTML <= 54){grading.innerHTML = 'CD'}
//         else if (totalScore.innerHTML <= 59){grading.innerHTML = 'C'}
//         else if (totalScore.innerHTML <= 64){grading.innerHTML = 'BC'}
//         else if (totalScore.innerHTML <= 69){grading.innerHTML = 'BC'}
//         else if (totalScore.innerHTML <= 74){grading.innerHTML = 'B'}
//         else {grading.innerHTML = 'A'}
//     })
//     // == To control figures that can be inputed into the caInput and exInput
//     caInput.addEventListener('input', ()=>{
//         if (caInput.value > 40){
//             alert (`Continous Assesment score cannot be more than 40`)
//             caInput.value = ''
//         }
//     })
//     exInput.addEventListener('input', ()=>{
//         if (exInput.value > 70){
//             alert (`Exam score cannot be more than 60 marks`)
//             exInput.value = ''
//         }
//     })
// })
// // === Overall Totals
// const avTotal = document.getElementById('avTotal')
// const caAvTotal = document.getElementById('caAvTotal')
// const exAvTotal = document.getElementById('exAvTotal')
// const overallAvTotal = document.getElementById('overallAvTotal')
// const avGrade = document.getElementById('avGrade')
// avTotal.addEventListener('click', ()=>{
//     // Getting CA score
//     const avCaScore = []
//     avCaScore[0] = Number(document.getElementById('engCA').value)
//     avCaScore[1] = Number(document.getElementById('mthCA').value)
//     avCaScore[2] = Number(document.getElementById('phyCA').value)
//     avCaScore[3] = Number(document.getElementById('chemCA').value)
//     avCaScore[4] = Number(document.getElementById('bioCA').value)
//     avCaScore[5] = Number(document.getElementById('geoCA').value)
//     avCaScore[6] = Number(document.getElementById('econCA').value)
//     avCaScore[7] = Number(document.getElementById('yorubaCA').value)
//     caAvTotal.innerHTML = Math.round(avCaScore.reduce((a,b)=>{return a+b}) / 8)


//     // Getting Exam score
//     const avExScore = []
//     avExScore[0] = Number(document.getElementById('engEx').value)
//     avExScore[1] = Number(document.getElementById('mthEx').value)
//     avExScore[2] = Number(document.getElementById('phyEx').value)
//     avExScore[3] = Number(document.getElementById('chemEx').value)
//     avExScore[4] = Number(document.getElementById('bioEx').value)
//     avExScore[5] = Number(document.getElementById('geoEx').value)
//     avExScore[6] = Number(document.getElementById('econEx').value)
//     avExScore[7] = Number(document.getElementById('yorubaEx').value)
//     exAvTotal.innerHTML = Math.round(avExScore.reduce((a,b)=>{return a+b}) / 8)

//     overallAvTotal.innerHTML = (Number(caAvTotal.innerHTML)) + (Number(exAvTotal.innerHTML))
    
//     if (overallAvTotal.innerHTML < 39){avGrade.innerHTML = 'F'}
//     else if (overallAvTotal.innerHTML <= 40){avGrade.innerHTML = 'E'}
//     else if (overallAvTotal.innerHTML <= 49){avGrade.innerHTML = 'D'}
//     else if (overallAvTotal.innerHTML <= 54){avGrade.innerHTML = 'CD'}
//     else if (overallAvTotal.innerHTML <= 59){avGrade.innerHTML = 'C'}
//     else if (overallAvTotal.innerHTML <= 64){avGrade.innerHTML = 'BC'}
//     else if (overallAvTotal.innerHTML <= 69){avGrade.innerHTML = 'BC'}
//     else if (overallAvTotal.innerHTML <= 74){avGrade.innerHTML = 'B'}
//     else {avGrade = 'A'}


// })



