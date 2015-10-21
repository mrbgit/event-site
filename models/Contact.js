'use strict';

var Sql = require('sequelize');
var sql = new Sql('events_page', 'eventsUser', 'p@ssw0rd1', {
  host: 'localhost',
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Contact = module.exports = sql.define('Contact', {
  firstName: Sql.STRING,
  lastName: Sql.STRING,
  email: {
    type: Sql.STRING,
    // unique: true,
    validate: {
      isEmail: true
    }
  },
  newsletterSubscription: Sql.BOOLEAN,
  divId: Sql.STRING,
  contactDescription: Sql.STRING(1000),
  role: Sql.ENUM('speaker', 'attendee'),
  msTeamMember: Sql.BOOLEAN,
  msTeamTitle: Sql.STRING,
  showOnHomePage: Sql.BOOLEAN,
  headShot: Sql.STRING,
  company: Sql.STRING,
  address: Sql.STRING,
  country: Sql.STRING,
  recommendedCity: Sql.STRING,
  interestId: Sql.INTEGER,
  attendedEvent: Sql.INTEGER,
  allowNotifications: Sql.BOOLEAN,
  allowPersonalInfoSharing: Sql.BOOLEAN
});

// create table if it doesn't already exist ```({force: true})``` will cause the table to be deleted and created regardless of if it exists already

Contact.sync({force: false})
/*.then(function () {
  // Table created
  return Contact.create({
    firstName: 'Rich',
    lastName: 'McLain',
    newsletterSubscription: true,
    divId: 'rich-mclain',
    contactDescription: 'Rich McLain is a Lead Program Manager in the Microsoft Office Interoperability team. Rich has been with Microsoft for 14 years, and he leads the Compliance, Interoperability and Standards Program Management efforts across the Microsoft Office Division. Responsibilities include all work centering on tools, production, testing and partner engagements for Office, SharePoint, Exchange and Lync protocols as well as Microsoft Office’s engagement with the OOXML, ODF and PDF standards. Prior to joining Microsoft, Rich spent 5 years at Adobe Systems working with Adobe’s Partner Programs. He graduated from Cornell University with a Bachelor’s of Science degree in Industrial Psychology.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Senior Lead Program Manager, Office Interoperability Team',
    showOnHomePage: true,
    headShot: 'rich-mclain-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  });
})
.then(function () {
  return Contact.create({
    firstName: 'Michael',
    lastName: 'Bowman',
    newsletterSubscription: true,
    divId: 'rich-mclain',
    contactDescription: 'Michael Bowman is a Program Manager in the Microsoft Office Interoperability team.   He leads the delivery and release efforts for interoperability events and test tools for the Microsoft Office Division, including SharePoint, Exchange Server, and Office.Prior to joining Microsoft, Michael spent the first part of his career in an engineering role at Hewlett Packard focusing on developing new industry standard server technologies.  He graduated from the University of Washington with a Bachelor’s of Science degree in Computer Science and a Masters of Business Administration from the Foster School of Business at the University of Washington.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Senior Program Manager, Office Interoperability Team',
    showOnHomePage: true,
    headShot: 'michael-bowman-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Kwabena (K.B.)',
    lastName: 'Badu-Antwi',
    newsletterSubscription: true,
    divId: 'kb-badu-antwi',
    contactDescription: 'Kwabena (K.B.) Badu-Antwi is a Senior Program Manager at Microsoft, in the Cloud and Enterprise Division. A native of Ghana, KB has been with Microsoft 8 years, and he leads the interoperability program for SQL Server and other data technologies in the Data Platform Group (DPG). He drives the delivery of interoperability guidance, events, and tools across all DPG protocols including OData. Recently, his team released an online protocol validation tool for OData. Prior to joining the SQL Server, KB served in the role of Program Manager on the Xbox Platform team. He graduated from Seattle Pacific University with a Bachelor’s of Science degree in Computer Science and a Master’s of Science degree in Information System Management.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Senior Program Manager, Cloud and Enterprise Division',
    showOnHomePage: true,
    headShot: 'kb-badu-antwi.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Andrew',
    lastName: 'Davidoff',
    newsletterSubscription: true,
    divId: 'andrew-davidoff',
    contactDescription: 'Andrew Davidoff is a Senior Software Test Engineer in the Microsoft Office Interoperability team.   He drives Interoperability testing and Test Suites across the Exchange family of Open Specifications, and other Office Open Specifications. Prior to joining Office Interoperability team, Andrew has served in the role of Senior Test Engineer and Senior Test Lead in Exchange team at Microsoft.  He was responsible for testing of major components of Exchange Server for a number of releases. He graduated from the Moscow Aviation Institute, Russia with a Bachelor’s degree in Computer Science.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Senior Software Test Engineer, Office Interoperability Team',
    showOnHomePage: true,
    headShot: 'andrew-davidoff-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Tom',
    lastName: 'Jebo',
    newsletterSubscription: true,
    divId: 'tom-jebo',
    contactDescription: 'Tom Jebo is a Supportability Program Manager for the Microsoft Developer Support Open Specifications team.  His primary responsibilities for the last three years have been Office file formats including Office Open XML and Office binary formats, Exchange server and client protocols including RPC/MAPI, ActiveSync, and Web Services and SharePoint protocols.  Before joining the Open Specifications team, Tom supported Microsoft’s languages and COM technologies and before Microsoft, Tom was an assembly language programmer working on operating system software in Silicon Valley. Tom grew up in upstate New York, holds a computer science degree from Boston University and currently lives and works in Portland, Oregon.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Supportability Program Manager, Developer Support Open Specifications Team',
    showOnHomePage: true,
    headShot: 'tom-jebo-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Pui',
    lastName: 'Leung',
    newsletterSubscription: true,
    divId: 'pui-leung',
    contactDescription: 'Pui Leung is a Software Engineer in the Microsoft Office Developer Experience team. He is responsible for Interoperability test suites and test tools development and release testing for the Microsoft Office Division, including SharePoint, Exchange Server, and Office. Prior to joining Microsoft, Pui worked as a System Software Engineer on various types of software projects including Windows kernel device driver and server management software at Compaq and Hewlett Packard.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Software Engineer, Developer Experience Team',
    showOnHomePage: true,
    headShot: '/pui-leung-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Bailey',
    lastName: 'Chauner',
    newsletterSubscription: true,
    divId: 'bailey-chauner',
    contactDescription: 'Bailey Chauner is the new Event Coordinator for the Office Interoperability team. Bailey graduated from the University of Montana with a Bachelor’s of Science degree in Marketing and a minor in Media Arts. She chose to begin her career in Seattle because of the balance between startups, established companies, and her love for the Northwest. Bailey grew up in Montana with her skiing, spending days on the lake, and enjoying small town life. In her free time, she enjoys playing tennis, blogging, and finding new places to eat.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Event Coordinator',
    showOnHomePage: true,
    headShot: 'bailey-chauner-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Donny',
    lastName: 'Luu',
    newsletterSubscription: true,
    divId: 'donny-luu',
    contactDescription: 'Donny is the partner software engineering manager of the Office Developer Experience team. He leads the development and release efforts for interoperability tools, documentation, and events for the Microsoft Office Division, including SharePoint, Exchange Server, and Office. Prior to joining the Office Developer Experience team, Donny was the test director of the Microsoft Analytics and Presentation Services team where he leaded the testing and release efforts of Excel, PowerBI, and PowerPoint.  In earlier Office releases, Donny was the software test manager for the Office Programmability team where he leaded the integration, testing, and release of VBA, COM-Addin, and PIA.  He graduated from the University of Washington with a Bachelor of Science degree in Computer Science and Engineering.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Partner Software Engineering Manager, Office Developer Experience Team',
    showOnHomePage: true,
    headShot: 'donny-luu-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Jinlin',
    lastName: 'Xu',
    newsletterSubscription: true,
    divId: 'jinlin-xu',
    contactDescription: 'Jinlin Xu is a Software Engineer in the Microsoft Office Interoperability team. He is responsible for Interoperability tool development and fixing the Interoperability document issues of SharePoint Server, Lync Server and Exchange Server. Prior to joining Microsoft, Jinlin spent 1 year as a Network Engineer at Huawei focusing on developing software on city router and 2 years as a Software Test Engineer focusing on Lync Server test suites development .He graduated from the Nankai University with a Bachelor’s degree in Computer Science.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Software Engineer, Office Interoperability Team',
    showOnHomePage: false,
    headShot: 'jinlin-xu-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Bryan S.',
    lastName: 'Burgin',
    newsletterSubscription: true,
    divId: 'bryan-burgin',
    contactDescription: 'Bryan Burgin is a Senior Escalation Engineer responsible for support of Microsoft’s open specifications (protocol documents).  He primarily works with third-party protocol implementers to address questions and issues related to the open specifications and to champion interoperability with Microsoft platforms.  He works extensively with the RDP/RDS and File sharing (SMB2&3) protocol groups.  However, along with his team, support 500+ on-the-wire Windows protocols.  He has been in this role for three years and at Microsoft for 13.  Prior to this role, Bryan supported Kernel driver developers, specializing in network (NDIS) driver development. Prior to joining Microsoft, Bryan spent many years developing products that integrated Wang VS minicomputers with PC networks (terminal emulation, file system redirection, print redirection).',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Senior Escalation Engineer, Developer Support, Open Specifications/Protocols/Interoperability',
    showOnHomePage: false,
    headShot: 'bryan-burgin-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Christine',
    lastName: 'Huang',
    newsletterSubscription: true,
    divId: 'christine-huang',
    contactDescription: 'Christine Huang is a Principal Test Manager in the Microsoft Windows Server and Cloud Interoperability team.   She manages the Microsoft Windows Server Interoperability team in China and owns the development and release efforts of test tools for interoperability events for Microsoft Windows Server Division. Prior to joining the Windows Server team, Christine worked as the role of Senior Engineer and Manager across several Microsoft products including Bing and Office, and prior to joining Microsoft she worked as a senior Software Developer in industry.  She graduated from National Taiwan University, Taiwan with a Bachelor’s degree in Business Administration and a Master’s degree in Computer Science from Georgia State University, USA.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Principal Test Manager, Windows Server Interoperability & Tools',
    showOnHomePage: false,
    headShot: 'christine-huang.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Feng',
    lastName: 'Han',
    newsletterSubscription: true,
    divId: 'feng-han',
    contactDescription: 'Feng Han is a software test engineer in Windows Server Interoperability team in Shanghai, China. He works on the development and support for synthetic test suite of Remote Desktop protocol family. Prior to joining Microsoft, Feng worked as a Software Development Engineer for 3 years. He graduated from the Zhejiang University with Bachelor’s degree and graduated from Shanghai Jiaotong University with Master’s degree in Software Engineering.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Partner Software Engineering Manager, Office Developer Experience Team',
    showOnHomePage: false,
    headShot: 'feng-han-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Guozhao',
    lastName: 'Wu',
    newsletterSubscription: true,
    divId: 'guozhao-wu',
    contactDescription: 'Guozhao Wu is a Software Test Engineer in the Microsoft Office Interoperability team. He drives Test Suites development across the Exchange family of Open Specification and Interoperability tool development for Office OPN parsers. Prior to joining Microsoft, Guozhao worked as a Software Development Engineer in Hangzhou Tiantu focusing on developing System for Highway Emergency. He graduated from the Zhejiang University with Bachelor’s degree & Master’s degree in Software Engineering.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Software Engineer in Test, Office Interoperability Team',
    showOnHomePage: false,
    headShot: 'guozhao-wu-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Guqing',
    lastName: 'Fang',
    newsletterSubscription: true,
    divId: 'guqing-fang',
    contactDescription: 'Guqing Fang is a Software Development Engineer in Test in the Microsoft Windows Server and Cloud Interoperability team in Shanghai, China. He owns the development and support efforts for Remote Desktop protocol family and Mobile Device Management test suites for Microsoft Windows Server Division. Prior to joining the team in Shanghai, Guqing worked as a Software Development Engineer in Test for 5 years, focusing on testing the model based testing tool SpecExplorer. Guqing graduated from Zhejiang University, Hangzhou China, with a Bachelor’s degree in Instrument Engineering.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Software Development Engineer in Test, Windows Server Interoperability Team',
    showOnHomePage: false,
    headShot: 'guqing-fang-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Hector',
    lastName: 'Sandino',
    newsletterSubscription: true,
    divId: 'hector-sandino',
    contactDescription: 'Hector Sandino is a Quality Assurance Manager in the Microsoft Office Interoperability team. He leads the development and release efforts for interoperability test tools and events for the Microsoft Office Division, including SharePoint, Exchange Server, and Office. Prior to joining the Office Interoperability team, Hector worked as a Software Developer Engineer across several products of the Microsoft Office brand, including: Outlook, PowerPoint, Visio, Excel, and Word. He graduated from the Pontificia Universidad Javeriana with a Bachelor’s of Science degree in Industrial Engineering and a Master of Science degree in Industrial Engineering from the University of Puerto Rico.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Quality Assurance Manager, Office Interoperability Team',
    showOnHomePage: false,
    headShot: 'hector-sandino-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Jinghui',
    lastName: 'Zhang',
    newsletterSubscription: true,
    divId: 'jinghui-zhang',
    contactDescription: 'Jinghui Zhang is a Software Engineer in the Microsoft Office Developer Experience team. She drives development for new Office Add-ins, SharePoint and Exchange Test Suites, and Office Open XML and Uniform Office Format interoperability tools. She graduated from Beijing University of Aeronautics & Astronautics, China with a Bachelor’s degree in Information Management and Information Systems.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Software Engineer in Test, Office Interoperability Team',
    showOnHomePage: false,
    headShot: 'jinghui-zhang-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Mai-Ing',
    lastName: 'Cheng',
    newsletterSubscription: true,
    divId: 'mai-ing-cheng',
    contactDescription: 'Mai-Ing Cheng is a Senior Program Manager Lead in the Microsoft Windows Server and Cloud Interoperability team. She manages and owns the Microsoft Windows Protocol Compliance related efforts.  She also manages the delivery and release efforts for Spec Explorer. She is also involved in managing in the area of specification languages, compilers, and message monitor and analyzer for interoperability technologies. Prior to joining Microsoft, Mai-Ing was a Research Engineer at RR Donnelley focusing on developing software solution for real-time digital commercial variable printing. She also worked as Senior Software Engineer at a Network company focusing developing firmware for network devices. She graduated from Feng Chia University, Taiwan with Bachelor’s degree in Business Administration and a Master’s degree Computer Science from DePaul University.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Principal Program Manager Lead, Windows Server Interoperability Team',
    showOnHomePage: false,
    headShot: 'mai-ing-cheng-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Obaid',
    lastName: 'Farooqi',
    newsletterSubscription: true,
    divId: 'obaid-farooqi',
    contactDescription: 'Obaid Farooqi is an Escalation Engineer on the Microsoft Developer Support, Open Specifications/Protocols/Interoperability team. Obaid responsible for support of Microsoft’s open specifications (protocol documents).  He earned his Master Computer Science degree from University of Texas at Arlington. He primarily works with third-party protocol implementers to address questions and issues related to the open specifications.  He works extensively with the Authentication, File sharing (SMB2&3) and Mobile Device Management (MDM) protocols but is capable of supporting any of the 500+ on-the-wire Windows protocols.  He has been in this role for six years at Microsoft and in the telecommunications industry as a developer for 12 years.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Escalation Engineer, Developer Support',
    showOnHomePage: false,
    headShot: 'obaid-farooqi-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Tarun',
    lastName: 'Chopra',
    newsletterSubscription: true,
    divId: 'tarun-chopra',
    contactDescription: 'Tarun Chopra is an Escalation Engineer with the Open Specification Support Team serving customers who are building solutions on the published Microsoft Windows Protocols. He joined Microsoft in August 2011 and works extensively on RDP, MDM\MDE, File sharing and Active Directory protocol groups. He has 7 years of development experience in C/C++/C# and 3 years of extensive experience in troubleshooting/debugging windows protocol issues. Prior to Microsoft, his work involved developing test suites to verify Microsoft Windows Protocol and implementing a solution to automate parking stations in embedded VC++.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Escalation Engineer, Open Specification Support Team',
    showOnHomePage: false,
    headShot: 'tarun-chopra-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Tom',
    lastName: 'Devey',
    newsletterSubscription: true,
    divId: 'tom-devey',
    contactDescription: 'Tom Devey is a Supportability Program Manager in the Microsoft Windows Interoperability team.   He leads the Windows Open Specification Partner support and events.    Events including Windows Protocol Plugfests are delivered at Microsoft regularly to Microsoft Partners implementing Active Directory, File Sharing and Remote Desktop, and other Microsoft protocols. Prior to joining the Windows Interoperability team, Tom served a similar role in the Microsoft Office division working with partners who were developing Exchange, SharePoint, Open XML, and the Office Binary formats solutions.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Escalation Engineer, Open Specification Support Team',
    showOnHomePage: false,
    headShot: 'tom-devey-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Yuqing',
    lastName: 'Zhao',
    newsletterSubscription: true,
    divId: 'yuqing-zhao',
    contactDescription: 'Yuqing Zhao is a Software Development Engineer in Test in the Microsoft Windows Server and Cloud Interoperability team in Shanghai, China. He owns the development and support efforts for Identity protocol family and OMI test suites for Microsoft Windows Server Division. Prior to joining the team in Shanghai, Yuqing worked as a Software Development Engineer for 4 years, focusing on SaaS development and protocol engineering. Yuqing graduated from Nanjing University of Postage and Telecommunications, Nanjing China, with a Bachelor’s degree in Information Engineering.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Software Development Engineer in Test, Windows Server Interoperability Team',
    showOnHomePage: false,
    headShot: 'yuqing-zhao-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
.then(function () {
  return Contact.create({
    firstName: 'Michelle',
    lastName: 'Hammond',
    newsletterSubscription: true,
    divId: 'michelle-hammond',
    contactDescription: 'Michelle has been involved in technical communication and developer community support for more than 20 years. The teams and projects she has been a part of at Microsoft during that time include the TechNet and MSDN feedback teams, the TechNet webcast program, content management for major Microsoft developer conferences, and extensive technical editing work on a wide range of topics. She has been part of the Office Interoperability team for nearly six years, first as a programmer writer and most recently as a release coordinator covering Open Specifications for Office, SharePoint, Exchange, and Skype for Business. Michelle is also an avid and passionate supporter of video games as a medium for artistic expression, social commentary, and powerful storytelling.',
    role: 'speaker',
    msTeamMember: true,
    msTeamTitle: 'Release Manager, Office Content Team',
    showOnHomePage: false,
    headShot: 'michelle-hammond-headshot.jpg',
    company: 'Microsoft',
    country: 'USA',
    allowNotifications: true,
    allowPersonalInfoSharing: false
  })
})
*/