const AP = {
  id: '0',
  year: 'PRIOR',
  semesters: [
    {
      id: '1000',
      semesterName: 'Advanced Placement',
      courses: []
    },
    {
      id: '1001',
      semesterName: 'Dual Enrollment',
      courses: []
    },
    {
      id: '1002',
      semesterName: 'Others',
      courses: []
    }
  ]
}

export default [
  {
    schoolName: "Engineering and Computer Science",
    // degreePlans: [
    //     "Biomedical Engineering",
    //     "Computer Engineering",
    //     "Computer Science",
    //     "Electrical Engineering",
    //     "Mechanical Engineering",
    //     "Software Engineering",
    // ]

    degreePlans: {
      'Biomedical Engineering': [
        AP,
        {
          id: '1',
          year: 'FRESHMAN',
          semesters: [
            {
              id: '2',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '3',
                  courseName: 'BMEN 1100 Introduction to Bioengineering I'
                },
                {
                  id: '4',
                  courseName: 'CHEM 1301 General Chemistry for Engineers'
                },
                {
                  id: '5',
                  courseName: 'CS 1324 Introduction to Programming for Biomedical Engineers',
                  Prereq: 'CS 1336'
                },
                {
                  id: '6',
                  courseName: 'ECS 1100 Introduction to Engineering and Computer Science',
                  Coreq: 'UNIV 1010'
                },
                {
                  id: '7',
                  courseName: 'MATH 2417 Calculus I',
                  Prereq: 'ALEKS 0000 or MATH 2306 or MATH 2312'
                },
                {
                  id: '8',
                  courseName: 'RHET 1302 Rhetoric'
                },
                {
                  id: '9',
                  courseName: 'UNIV 1010 Freshman Seminar',
                  Coreq: 'ARHM 1100 or ATCM 1100 or BA 1100 or BBSU 1100 or BCOM 1300 or BIS 1100 or ECS 1100 or EPPS 1110 or NATS 1101 or NATS 1142 or UNIV 1100'
                }
              ]
            },
            {
              id: '10',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '11',
                  courseName: 'BMEN 1208 Introduction to Bioengineering II',
                  Prereq: 'BMEN 1100',
                  PreOrCoreq: '(PHYS 2325 and PHYS 2125) and (MATH 2419 or MATH 2414)'
                },
                {
                  id: '12',
                  courseName: 'CHEM 2324 Introductory Organic Chemistry for Engineers',
                  Prereq: '(CHEM 1301 or CHEM 1312 or CHEM 1316)'
                },
                {
                  id: '13',
                  courseName: 'ENGR 2300 Linear Algebra for Engineers',
                  PreOrCoreq: 'MATH 2414 or MATH 2419'
                },
                {
                  id: '14',
                  courseName: 'MATH 2419 Calculus II',
                  Prereq: ' MATH 2417'
                },
                {
                  id: '15',
                  courseName: 'PHYS 2325 Mechanics',
                  Prereq: 'MATH 2413 or MATH 2417',
                  Coreq: '(MATH 2414 or MATH 2419) and (PHYS 2121 or PHYS 2125)'
                },
                {
                  id: '16',
                  courseName: 'PHYS 2125 Physics Laboratory I',
                  Coreq: 'PHYS 1301 or PHYS 2325 or PHYS 2421'
                }
              ]
            },
            {
              id: '17',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '18',
          year: 'SOPHOMORE',
          semesters: [
            {
              id: '19',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '20',
                  courseName: 'BIOL 2311 Introduction to Modern Biology I',
                  Prereq: '((CHEM 1311 or CHEM 1315) and (CHEM 1312 or CHEM 1316)) or CHEM 1301',
                  Coreq: 'BIOL 2111'
                },
                {
                  id: '21',
                  courseName: 'BIOL 2111 Introduction to Modern Biology Workshop I',
                  Prereq: '((CHEM 1311 or CHEM 1315) and (CHEM 1312 or CHEM 1316)) or CHEM 1301',
                  Coreq: 'BIOL 2311'
                },
                {
                  id: '22',
                  courseName: 'BMEN 2320 Statics',
                  Prereq: 'PHYS 2325 and PHYS 2125',
                  PreOrCoreq: 'MATH 2415 or MATH 2419'
                },
                {
                  id: '23',
                  courseName: 'MATH 2420 Differential Equations with Applications',
                  Prereq: '(MATH 2415 or MATH 2419) and MATH 2418'
                },
                {
                  id: '24',
                  courseName: 'PHYS 2326 Electromagnetism and Waves',
                  Prereq: 'PHYS 2325 and (MATH 2414 or MATH 2419)',
                  Coreq: 'PHYS 2126'
                },
                {
                  id: '25',
                  courseName: 'PHYS 2126 Physics Laboratory II',
                  Coreq: 'PHYS 1302 or PHYS 2326 or PHYS 2422'
                }
              ]
            },
            {
              id: '26',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '27',
                  courseName: 'Core Course'
                },
                {
                  id: '28',
                  courseName: 'BIOL 2281 Introductory Biology Laboratory',
                  Prereq: 'BIOL 2311 '
                },
                {
                  id: '29',
                  courseName: 'BMEN 3320 Electrical and Electronic Circuits in Biomedical Engineering',
                  Prereq: 'MATH 2420 and (PHYS 2126 and PHYS 2326)',
                  PreOrCoreq: 'CS 1324'
                },
                {
                  id: '30',
                  courseName: 'BMEN 3120 Biomedical Circuits and Instrumentation Laboratory',
                  PreOrCoreq: 'BMEN 3320',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '31',
                  courseName: 'BMEN 3399 Introductory Biomechanics',
                  Prereq: 'BMEN 2320'
                },
                {
                  id: '32',
                  courseName: 'ENGR 3300 Advanced Engineering Mathematics',
                  Prereq: '(MATH 2415 or MATH 2419) and ENGR 2300',
                  PreOrCoreq: 'MATH 2420'
                },
                {
                  id: '33',
                  courseName: 'ENGR 3341 Probability Theory and Statistics',
                  RecCoreq: 'MATH 2420',
                  Prereq: 'MATH 2414 or MATH 2419'
                }
              ]
            },
            {
              id: '34',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '35',
          year: 'JUNIOR',
          semesters: [
            {
              id: '36',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '37',
                  courseName: 'Core Courses'
                },
                {
                  id: '38',
                  courseName: 'BMEN 3315 Thermodynamics and Physical Chemistry in Biomedical Engineering',
                  Prereq: '(CHEM 1301 or (CHEM 1311 and CHEM 1312)) and (CHEM 2324 or (CHEM 2323 and CHEM 2325)) and (MATH 2415 or MATH 2419) and (PHYS 2126 and PHYS 2326)'
                },
                {
                  id: '39',
                  courseName: 'BMEN 3330 Engineering Physiology of the Human Body',
                  Prereq: 'BIOL 2311'
                },
                {
                  id: '40',
                  courseName: 'BMEN 3130 Engineering Physiology Laboratory',
                  Prereq: 'RHET 1302',
                  PreOrCoreq: 'BMEN 3330'
                },
                {
                  id: '41',
                  courseName: 'EE 3302 Signals and Systems',
                  Prereq: 'ENGR 3300'
                },
                {
                  id: '42',
                  courseName: 'EE 3102 Signals and Systems Laboratory'
                }
              ]
            },
            {
              id: '43',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '44',
                  courseName: 'BMEN 3350 Biomedical Component and System Design',
                  Prereq: 'BMEN 3320',
                  PreOrCoreq: 'BMEN 3402 or EE 3302'
                },
                {
                  id: '45',
                  courseName: 'BMEN 3150 Biomedical Engineering Laboratory',
                  PreOrCoreq: 'BMEN 3350',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '46',
                  courseName: 'ECS 3390 Professional and Technical Communication',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '47',
                  courseName: 'Core Courses'
                }
              ]
            },
            {
              id: '48',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '49',
          year: 'SENIOR',
          semesters: [
            {
              id: '50',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '51',
                  courseName: 'BMEN 4320 Intermediate Electrical Systems',
                  Prereq: 'BMEN 3120 and BMEN 3320'
                },
                {
                  id: '52',
                  courseName: 'BMEN 4360 Biomaterials and Medical Devices',
                  PreOrCoreq: 'BMEN 2320 and (CHEM 1301 or (CHEM 1311 and CHEM 1312)) and (CHEM 2324 or (CHEM 2323 and CHEM 2325))'
                },
                {
                  id: '53',
                  courseName: 'BMEN 4388 Senior Design Project I',
                  Prereq: 'BMEN 3130 and BMEN 3150 and BMEN 3320 and BMEN 3330 and BMEN 3350 and ECS 3390'
                },
                {
                  id: '54',
                  courseName: 'ECS 2361 Social Issues and Ethics in Computer Science and Engineering'
                },
                {
                  id: '55',
                  courseName: 'UNIV 2020 Core Curriculum Assessment'
                }
              ]
            },
            {
              id: '56',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '57',
                  courseName: 'BMEN 4310 Feedback Systems in Biomedical Engineering',
                  Prereq: 'ENGR 2300 and MATH 2420'
                },
                {
                  id: '58',
                  courseName: 'BMEN 4110 Biomedical Feedback Systems Laboratory',
                  Coreq: 'BMEN 4310',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '59',
                  courseName: 'BMEN 4389 Senior Design Project II',
                  Prereq: 'BMEN 4388'
                },
                {
                  id: '60',
                  courseName: 'BMEN Prescribed Elective'
                },
                {
                  id: '61',
                  courseName: 'BMEN Prescribed Elective'
                }
              ]
            },
            {
              id: '62',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        }
      ],
      'Computer Engineering': [
        AP,
        {
          id: '1',
          year: 'FRESHMAN',
          semesters: [
            {
              id: '2',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '3',
                  courseName: '060 Core Course'
                },
                {
                  id: '4',
                  courseName: 'CE 1100 Introduction to Computer Engineering'
                },
                {
                  id: '5',
                  courseName: 'MATH 2417 Calculus I',
                  Prereq: 'ALEKS 0000 or MATH 2306 or MATH 2312'
                },
                {
                  id: '6',
                  courseName: 'RHET 1302 Rhetoric'
                },
                {
                  id: '7',
                  courseName: 'CS 1337 Computer Science I',
                  Prereq: 'CS 1336'
                },
                {
                  id: '8',
                  courseName: 'ECS 1100 Introduction to Engineering and Computer Science',
                  Coreq: 'UNIV 1010'
                },
                {
                  id: '9',
                  courseName: 'UNIV 1010 Freshman Seminar',
                  Coreq: 'ARHM 1100 or ATCM 1100 or BA 1100 or BBSU 1100 or BCOM 1300 or BIS 1100 or ECS 1100 or EPPS 1110 or NATS 1101 or NATS 1142 or UNIV 1100'
                }
              ]
            },
            {
              id: '10',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '11',
                  courseName: 'ENGR 2300 Linear Algebra for Engineers',
                  PreOrCoreq: 'MATH 2414 or MATH 2419'
                },
                {
                  id: '12',
                  courseName: 'CE 1202 Introduction to Electrical Engineering II'
                },
                {
                  id: '13',
                  courseName: 'MATH 2419 Calculus II',
                  Prereq: ' MATH 2417'
                },
                {
                  id: '14',
                  courseName: 'CE 2310 Introduction to Digital Systems'
                },
                {
                  id: '15',
                  courseName: 'PHYS 2325 Mechanics',
                  Prereq: 'MATH 2413 or MATH 2417',
                  Coreq: '(MATH 2414 or MATH 2419) and (PHYS 2121 or PHYS 2125)'
                },
                {
                  id: '16',
                  courseName: 'PHYS 2125 Physics Laboratory I',
                  Coreq: 'PHYS 1301 or PHYS 2325 or PHYS 2421'
                }
              ]
            },
            {
              id: '17',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '18',
          year: 'SOPHOMORE',
          semesters: [
            {
              id: '19',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '20',
                  courseName: 'CE 2305 Discrete Mathematics for Computing I',
                  Prereq: 'ALEKS 0000 or MATH 2312'
                },
                {
                  id: '21',
                  courseName: 'CE 2336 Computer Science II',
                  Prereq: '(CE 1337 or CS 1337)',
                  PreOrCoreq: '(CE 2305 or CS 2305)'
                },
                {
                  id: '22',
                  courseName: 'ENGR 3341 Probability Theory and Statistics',
                  RecCoreq: 'MATH 2420',
                  Prereq: 'MATH 2414 or MATH 2419'
                },
                {
                  id: '23',
                  courseName: 'MATH 2420 Differential Equations with Applications',
                  Prereq: '(MATH 2415 or MATH 2419) and MATH 2418'
                },
                {
                  id: '24',
                  courseName: 'PHYS 2326 Electromagnetism and Waves',
                  Prereq: 'PHYS 2325 and (MATH 2414 or MATH 2419)',
                  Coreq: 'PHYS 2126'
                },
                {
                  id: '25',
                  courseName: 'PHYS 2126 Physics Laboratory II',
                  Coreq: 'PHYS 1302 or PHYS 2326 or PHYS 2422'
                }
              ]
            },
            {
              id: '26',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '27',
                  courseName: '040 Core Course'
                },
                {
                  id: '28',
                  courseName: '060 Core Course'
                },
                {
                  id: '29',
                  courseName: 'ENGR 3300 Advanced Engineering Mathematics',
                  Prereq: '(MATH 2415 or MATH 2419) and ENGR 2300',
                  PreOrCoreq: 'MATH 2420'
                },
                {
                  id: '30',
                  courseName: 'CE 3301 Electrical Network Analysis',
                  Prereq: 'MATH 2420 and PHYS 2326'
                },
                {
                  id: '31',
                  courseName: 'CE 3101 Electrical Network Analysis Laboratory'
                },
                {
                  id: '32',
                  courseName: 'CE 3345 Data Structures and Introduction to Algorithmic Analysis',
                  Prereq: '(CE 2305 or CS 2305) and (CE 2336 or CS 2336 or CS 2337)',
                  PreOrCoreq: '(CS 3341 or SE 3341 or ENGR 3341)'
                }
              ]
            },
            {
              id: '33',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '34',
          year: 'JUNIOR',
          semesters: [
            {
              id: '35',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '36',
                  courseName: 'ECS 3390 Professional and Technical Communication',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '37',
                  courseName: 'GOVT 2305 American National Government'
                },
                {
                  id: '38',
                  courseName: 'CE 3310 Electronic Devices',
                  Prereq: 'CE 3301 or EE 3301'
                },
                {
                  id: '39',
                  courseName: 'CE 3110 Electronic Devices Laboratory'
                },
                {
                  id: '40',
                  courseName: 'CE 3320 Digital Circuits',
                  Prereq: 'CE 2310 or EE 2310'
                },
                {
                  id: '41',
                  courseName: 'CE 3120 Digital Circuits Laboratory',
                  Coreq: 'CE 3320 or EE 3320',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '42',
                  courseName: 'CE 3354 Software Engineering',
                  Prereq: '((CE 2336 or CS 2336 or CS 2337) or CS 3333) and (CE 2305 or CS 2305)',
                  PreOrCoreq: 'ECS 3390'
                }
              ]
            },
            {
              id: '43',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '44',
                  courseName: '050 Core Course'
                },
                {
                  id: '45',
                  courseName: 'GOVT 2306 State and Local Government'
                },
                {
                  id: '46',
                  courseName: 'CE 3311 Electronic Circuits',
                  Prereq: 'CE 3310 or EE 3310'
                },
                {
                  id: '47',
                  courseName: 'CE 3111 Electronic Circuits Laboratory'
                },
                {
                  id: '48',
                  courseName: 'CE 3302 Signals and Systems'
                },
                {
                  id: '49',
                  courseName: 'CE 3102 Signals and Systems Laboratory'
                },
                {
                  id: '50',
                  courseName: 'CE 4390 Computer Networks',
                  Prereq: '(CE 3345 or CS 3345 or SE 3345)'
                }
              ]
            },
            {
              id: '51',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '52',
          year: 'SENIOR',
          semesters: [
            {
              id: '53',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '54',
                  courseName: 'ECS 2361 Social Issues and Ethics in Computer Science and Engineering'
                },
                {
                  id: '55',
                  courseName: 'CE 4304 Computer Architecture',
                  Prereq: 'CE 3320 or EE 3320'
                },
                {
                  id: '56',
                  courseName: 'CE 4388 Senior Design Project I',
                  Prereq: 'ECS 3390 and ((CE 3311 or EE 3311) and (CE 3320 or EE 3320) and (CE 3345 or CS 3345 or SE 3345) and (CE 3354 or CS 3354 or SE 3354)) or (ENGR 3300 and EE 3302 and (CE 3311 or EE 3311) and (CE 3320 or EE 3320)) or (ENGR 3300 and EE 3302 and (CE 3345 or CS 3345 or SE 3345))'
                },
                {
                  id: '57',
                  courseName: 'Free Elective'
                },
                {
                  id: '58',
                  courseName: 'Free Elective'
                }
              ]
            },
            {
              id: '59',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '60',
                  courseName: 'CE 4337 Organization of Programming Languages',
                  Prereq: '((CE 2336 or CS 2336 or CS 2337) or CS 3333) and (CE 2305 or CS 2305) and (CS 2340 or SE 3340 or CE 4304 or EE 4304)'
                },
                {
                  id: '61',
                  courseName: 'CE 4348 Operating Systems Concepts',
                  Prereq: '(CS 2340 or SE 3340) and (CE 3345 or CS 3345 or SE 3345)'
                },
                {
                  id: '62',
                  courseName: 'CE 4389 Senior Design Project II',
                  Prereq: 'CE 4388 or EE 4388'
                },
                {
                  id: '63',
                  courseName: 'CE 4370 Embedded Microprocessor Systems',
                  Prereq: 'CE 3320 or EE 3320'
                },
                {
                  id: '64',
                  courseName: 'Free Elective'
                },
                {
                  id: '65',
                  courseName: 'UNIV 2020 Core Curriculum Assessment'
                }
              ]
            },
            {
              id: '66',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        }
      ],
      'Computer Science': [
        AP,
        {
          id: '1',
          year: 'FRESHMAN',
          semesters: [
            {
              id: '2',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '3',
                  courseName: '060 Core Course'
                },
                {
                  id: '4',
                  courseName: 'MATH 2413 Differential Calculus',
                  Prereq: 'ALEKS 0000 or MATH 2306 or MATH 2312'
                },
                {
                  id: '5',
                  courseName: 'CS 1200 Introduction to Computer Science and Software Engineering'
                },
                {
                  id: '6',
                  courseName: 'CS 1337 Computer Science I',
                  Prereq: 'CS 1336'
                },
                {
                  id: '7',
                  courseName: 'RHET 1302 Rhetoric'
                },
                {
                  id: '8',
                  courseName: 'ECS 1100 Introduction to Engineering and Computer Science',
                  Coreq: 'UNIV 1010'
                },
                {
                  id: '9',
                  courseName: 'UNIV 1010 Freshman Seminar',
                  Coreq: 'ARHM 1100 or ATCM 1100 or BA 1100 or BBSU 1100 or BCOM 1300 or BIS 1100 or ECS 1100 or EPPS 1110 or NATS 1101 or NATS 1142 or UNIV 1100'
                }
              ]
            },
            {
              id: '10',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '11',
                  courseName: '060 Core Course'
                },
                {
                  id: '12',
                  courseName: 'MATH 2414 Integral Calculus',
                  Prereq: ' MATH 2417 or  MATH 2413'
                },
                {
                  id: '13',
                  courseName: 'CS 2305 Discrete Mathematics for Computing I',
                  Prereq: 'ALEKS 0000 or MATH 2312'
                },
                {
                  id: '14',
                  courseName: 'CS 2336 Computer Science II',
                  Prereq: '(CE 1337 or CS 1337)',
                  PreOrCoreq: '(CE 2305 or CS 2305)'
                },
                {
                  id: '15',
                  courseName: 'PHYS 2325 Mechanics',
                  Prereq: 'MATH 2413 or MATH 2417',
                  Coreq: '(MATH 2414 or MATH 2419) and (PHYS 2121 or PHYS 2125)'
                },
                {
                  id: '16',
                  courseName: 'PHYS 2125 Physics Laboratory I',
                  Coreq: 'PHYS 1301 or PHYS 2325 or PHYS 2421'
                }
              ]
            },
            {
              id: '17',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '18',
          year: 'SOPHOMORE',
          semesters: [
            {
              id: '19',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '20',
                  courseName: '040 Core Course'
                },
                {
                  id: '21',
                  courseName: 'GOVT 2305 American National Government'
                },
                {
                  id: '22',
                  courseName: 'CS 3305 Discrete Mathematics for Computing II',
                  Prereq: '(CE 2305 or CS 2305) and (MATH 2414 or MATH 2419)'
                },
                {
                  id: '23',
                  courseName: 'CS 2340 Computer Architecture'
                },
                {
                  id: '24',
                  courseName: 'PHYS 2326 Electromagnetism and Waves',
                  Prereq: 'PHYS 2325 and (MATH 2414 or MATH 2419)',
                  Coreq: 'PHYS 2126'
                },
                {
                  id: '25',
                  courseName: 'PHYS 2126 Physics Laboratory II',
                  Coreq: 'PHYS 1302 or PHYS 2326 or PHYS 2422'
                }
              ]
            },
            {
              id: '26',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '27',
                  courseName: 'MATH 2418 Linear Algebra',
                  Prereq: '  MATH 2306 or MATH 2413 or MATH 2417'
                },
                {
                  id: '28',
                  courseName: 'GOVT 2306 State and Local Government'
                },
                {
                  id: '29',
                  courseName: 'CS 3341 Probability and Statistics in Computer Science and Software Engineering',
                  Prereq: '(MATH 1326 or MATH 2414 or MATH 2419) and (CE 2305 or CS 2305)'
                },
                {
                  id: '30',
                  courseName: 'CS 3345 Data Structures and Introduction to Algorithmic Analysis',
                  Prereq: '(CE 2305 or CS 2305) and (CE 2336 or CS 2336 or CS 2337)',
                  PreOrCoreq: '(CS 3341 or SE 3341 or ENGR 3341)'
                },
                {
                  id: '31',
                  courseName: 'CS 3377 C/C++ Programming in a UNIX Environment',
                  Prereq: '(CE 2336 or CS 2336 or CS 2337)'
                }
              ]
            },
            {
              id: '32',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '33',
          year: 'JUNIOR',
          semesters: [
            {
              id: '34',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '35',
                  courseName: '050 Core Course'
                },
                {
                  id: '36',
                  courseName: 'ECS 3390 Professional and Technical Communication',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '37',
                  courseName: 'CS 3354 Software Engineering',
                  Prereq: '((CE 2336 or CS 2336 or CS 2337) or CS 3333) and (CE 2305 or CS 2305)',
                  PreOrCoreq: 'ECS 3390'
                },
                {
                  id: '38',
                  courseName: 'CS 4337 Organization of Programming Languages',
                  Prereq: '((CE 2336 or CS 2336 or CS 2337) or CS 3333) and (CE 2305 or CS 2305) and (CS 2340 or SE 3340 or CE 4304 or EE 4304)'
                },
                {
                  id: '39',
                  courseName: 'CS 4341 Digital Logic and Computer Design',
                  Prereq: '(CE 2310 or EE 2310) or (CS 2340 or SE 3340) and PHYS 2326',
                  Coreq: 'CS 4141'
                },
                {
                  id: '40',
                  courseName: 'CS 4141 Digital Systems Laboratory',
                  Coreq: 'CS 4341'
                }
              ]
            },
            {
              id: '41',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '42',
                  courseName: '030 Core Course'
                },
                {
                  id: '43',
                  courseName: 'ECS 2361 Social Issues and Ethics in Computer Science and Engineering'
                },
                {
                  id: '44',
                  courseName: 'CS 3162 Professional Responsibility in Computer Science and Software Engineering',
                  PreOrCoreq: 'CS 3345 and CS 3354'
                },
                {
                  id: '45',
                  courseName: 'CS 4348 Operating Systems Concepts',
                  Prereq: '(CS 2340 or SE 3340) and (CS 3377 or SE 3377) and (CE 3345 or CS 3345 or SE 3345)'
                },
                {
                  id: '46',
                  courseName: 'CS 4349 Advanced Algorithm Design and Analysis',
                  Prereq: 'CS 3305 and (CE 3345 or CS 3345 or SE 3345)'
                },
                {
                  id: '47',
                  courseName: 'Free Elective'
                }
              ]
            },
            {
              id: '48',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '49',
          year: 'SENIOR',
          semesters: [
            {
              id: '50',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '51',
                  courseName: 'CS 4347 Database Systems',
                  Prereq: 'CE 3345 or CS 3345 or SE 3345'
                },
                {
                  id: '52',
                  courseName: 'CS 4384 Automata Theory',
                  Prereq: 'CS 3305'
                },
                {
                  id: '53',
                  courseName: 'Free Elective'
                },
                {
                  id: '54',
                  courseName: 'CS Guided Elective'
                },
                {
                  id: '55',
                  courseName: 'CS Guided Elective'
                }
              ]
            },
            {
              id: '56',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '57',
                  courseName: 'CS 4485 Computer Science Project',
                  Prereq: '(CE 3345 or CS 3345 or SE 3345) and (CE 3354 or CS 3354 or SE 3354) '
                },
                {
                  id: '58',
                  courseName: 'Free Elective'
                },
                {
                  id: '59',
                  courseName: 'Free Elective'
                },
                {
                  id: '60',
                  courseName: 'CS Guided Elective'
                },
                {
                  id: '61',
                  courseName: 'UNIV 2020 Core Curriculum Assessment'
                }
              ]
            },
            {
              id: '62',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        }
      ],
      'Electrical Engineering': [
        AP,
        {
          id: '1',
          year: 'FRESHMAN',
          semesters: [
            {
              id: '2',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '3',
                  courseName: '060 Core Course'
                },
                {
                  id: '4',
                  courseName: 'EE 1100 Introduction to Electrical Engineering'
                },
                {
                  id: '5',
                  courseName: 'MATH 2417 Calculus I',
                  Prereq: 'ALEKS 0000 or MATH 2306 or MATH 2312'
                },
                {
                  id: '6',
                  courseName: 'RHET 1302 Rhetoric'
                },
                {
                  id: '7',
                  courseName: 'CS 1325 Introduction to Programming',
                  Prereq: 'CS 1336'
                },
                {
                  id: '8',
                  courseName: 'ECS 1100 Introduction to Engineering and Computer Science',
                  Coreq: 'UNIV 1010'
                },
                {
                  id: '9',
                  courseName: 'UNIV 1010 Freshman Seminar',
                  Coreq: 'ARHM 1100 or ATCM 1100 or BA 1100 or BBSU 1100 or BCOM 1300 or BIS 1100 or ECS 1100 or EPPS 1110 or NATS 1101 or NATS 1142 or UNIV 1100'
                }
              ]
            },
            {
              id: '10',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '11',
                  courseName: 'ENGR 2300 Linear Algebra for Engineers',
                  PreOrCoreq: 'MATH 2414 or MATH 2419'
                },
                {
                  id: '12',
                  courseName: 'EE 1202 Introduction to Electrical Engineering II'
                },
                {
                  id: '13',
                  courseName: 'MATH 2419 Calculus II',
                  Prereq: ' MATH 2417'
                },
                {
                  id: '14',
                  courseName: 'EE 2310 Introduction to Digital Systems'
                },
                {
                  id: '15',
                  courseName: 'PHYS 2325 Mechanics',
                  Prereq: 'MATH 2413 or MATH 2417',
                  Coreq: '(MATH 2414 or MATH 2419) and (PHYS 2121 or PHYS 2125)'
                },
                {
                  id: '16',
                  courseName: 'PHYS 2125 Physics Laboratory I',
                  Coreq: 'PHYS 1301 or PHYS 2325 or PHYS 2421'
                }
              ]
            },
            {
              id: '17',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '18',
          year: 'SOPHOMORE',
          semesters: [
            {
              id: '19',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '20',
                  courseName: '040 Core Course'
                },
                {
                  id: '21',
                  courseName: '060 Core Course'
                },
                {
                  id: '22',
                  courseName: 'ENGR 3341 Probability Theory and Statistics',
                  RecCoreq: 'MATH 2420',
                  Prereq: 'MATH 2414 or MATH 2419'
                },
                {
                  id: '23',
                  courseName: 'MATH 2420 Differential Equations with Applications',
                  Prereq: '(MATH 2415 or MATH 2419) and MATH 2418'
                },
                {
                  id: '24',
                  courseName: 'PHYS 2326 Electromagnetism and Waves',
                  Prereq: 'PHYS 2325 and (MATH 2414 or MATH 2419)',
                  Coreq: 'PHYS 2126'
                },
                {
                  id: '25',
                  courseName: 'PHYS 2126 Physics Laboratory II',
                  Coreq: 'PHYS 1302 or PHYS 2326 or PHYS 2422'
                }
              ]
            },
            {
              id: '26',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '27',
                  courseName: 'EE 3301 Electrical Network Analysis',
                  Prereq: 'MATH 2420 and PHYS 2326'
                },
                {
                  id: '28',
                  courseName: 'EE 3101 Electrical Network Analysis Laboratory'
                },
                {
                  id: '29',
                  courseName: 'ENGR 3300 Advanced Engineering Mathematics',
                  Prereq: '(MATH 2415 or MATH 2419) and ENGR 2300',
                  PreOrCoreq: 'MATH 2420'
                },
                {
                  id: '30',
                  courseName: 'GOVT 2305 American National Government'
                },
                {
                  id: '31',
                  courseName: 'EE 3320 Digital Circuits',
                  Prereq: 'CE 2310 or EE 2310'
                },
                {
                  id: '32',
                  courseName: 'EE 3120 Digital Circuits Laboratory',
                  Coreq: 'CE 3320 or EE 3320',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '33',
                  courseName: 'CHEM 1311 General Chemistry I',
                  Coreq: 'CHEM 1111'
                },
                {
                  id: '34',
                  courseName: 'CHEM 1111 General Chemistry Laboratory I',
                  Coreq: 'CHEM 1311'
                }
              ]
            },
            {
              id: '35',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '36',
          year: 'JUNIOR',
          semesters: [
            {
              id: '37',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '38',
                  courseName: '050 Core Course'
                },
                {
                  id: '39',
                  courseName: 'ECS 3390 Professional and Technical Communication',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '40',
                  courseName: 'GOVT 2306 State and Local Government'
                },
                {
                  id: '41',
                  courseName: 'EE 3302 Signals and Systems',
                  Prereq: 'ENGR 3300'
                },
                {
                  id: '42',
                  courseName: 'EE 3102 Signals and Systems Laboratory'
                },
                {
                  id: '43',
                  courseName: 'EE 3310 Electronic Devices',
                  Prereq: 'CE 3301 or EE 3301'
                },
                {
                  id: '44',
                  courseName: 'EE 3110 Electronic Devices Laboratory'
                }
              ]
            },
            {
              id: '45',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '46',
                  courseName: 'Free Elective'
                },
                {
                  id: '47',
                  courseName: 'ECS 2361 Social Issues and Ethics in Computer Science and Engineering'
                },
                {
                  id: '48',
                  courseName: 'EE 3311 Electronic Circuits',
                  Prereq: 'CE 3310 or EE 3310'
                },
                {
                  id: '49',
                  courseName: 'EE 3111 Electronic Circuits Laboratory'
                },
                {
                  id: '50',
                  courseName: 'EE 3350 Communications Systems',
                  Prereq: 'ENGR 3300 and (CE 3301 or EE 3301) and EE 3302 and ENGR 3341'
                },
                {
                  id: '51',
                  courseName: 'EE 3150 Communications Systems Laboratory'
                },
                {
                  id: '52',
                  courseName: 'EE 4310 Systems and Controls',
                  Prereq: 'ENGR 2300 and EE 3302'
                }
              ]
            },
            {
              id: '53',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '54',
          year: 'SENIOR',
          semesters: [
            {
              id: '55',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '56',
                  courseName: 'EE 4301 Electromagnetic Engineering I',
                  Prereq: 'PHYS 2326 and ENGR 3300 and (CE 3301 or EE 3301)'
                },
                {
                  id: '57',
                  courseName: 'EE 4388 Senior Design Project I',
                  Prereq: 'ECS 3390 and ((CE 3311 or EE 3311) and (CE 3320 or EE 3320) and (CE 3345 or CS 3345 or SE 3345) and (CE 3354 or CS 3354 or SE 3354)) or (ENGR 3300 and EE 3302 and (CE 3311 or EE 3311) and (CE 3320 or EE 3320)) or (ENGR 3300 and EE 3302 and (CE 3345 or CS 3345 or SE 3345))'
                },
                {
                  id: '58',
                  courseName: 'EE Guided Elective'
                },
                {
                  id: '59',
                  courseName: 'EE Guided Elective'
                },
                {
                  id: '60',
                  courseName: 'Free Elective'
                }
              ]
            },
            {
              id: '61',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '62',
                  courseName: 'EE 4368 RF Circuit Design Principles',
                  Prereq: '(CE 3310 or EE 3310) and EE 4301'
                },
                {
                  id: '63',
                  courseName: 'EE 4389 Senior Design Project II',
                  Prereq: 'CE 4388 or EE 4388'
                },
                {
                  id: '64',
                  courseName: 'UNIV 2020 Core Curriculum Assessment'
                },
                {
                  id: '65',
                  courseName: 'EE Guided Elective'
                },
                {
                  id: '66',
                  courseName: 'Free Elective'
                }
              ]
            },
            {
              id: '67',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        }
      ],
      'Mechanical Engineering': [
        AP,
        {
          id: '1',
          year: 'FRESHMAN',
          semesters: [
            {
              id: '2',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '3',
                  courseName: 'RHET 1302 Rhetoric'
                },
                {
                  id: '4',
                  courseName: 'MATH 2417 Calculus I',
                  Prereq: 'ALEKS 0000 or MATH 2306 or MATH 2312'
                },
                {
                  id: '5',
                  courseName: 'MECH 1100 Introduction to Mechanical Engineering I'
                },
                {
                  id: '6',
                  courseName: 'CS 1325 Introduction to Programming',
                  Prereq: 'CS 1336'
                },
                {
                  id: '7',
                  courseName: 'CHEM 1311 General Chemistry I',
                  Coreq: 'CHEM 1111'
                },
                {
                  id: '8',
                  courseName: 'CHEM 1111 General Chemistry Laboratory I',
                  Coreq: 'CHEM 1311'
                },
                {
                  id: '9',
                  courseName: 'ECS 1100 Introduction to Engineering and Computer Science',
                  Coreq: 'UNIV 1010'
                },
                {
                  id: '10',
                  courseName: 'UNIV 1010 Freshman Seminar',
                  Coreq: 'ARHM 1100 or ATCM 1100 or BA 1100 or BBSU 1100 or BCOM 1300 or BIS 1100 or ECS 1100 or EPPS 1110 or NATS 1101 or NATS 1142 or UNIV 1100'
                }
              ]
            },
            {
              id: '11',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '12',
                  courseName: '040 Core Course'
                },
                {
                  id: '13',
                  courseName: 'MATH 2419 Calculus II',
                  Prereq: ' MATH 2417'
                },
                {
                  id: '14',
                  courseName: 'MECH 1208 Introduction to Mechanical Engineering II',
                  Prereq: 'MECH 1100',
                  PreOrCoreq: '(PHYS 2325 and PHYS 2125) and (MATH 2419 or MATH 2414)'
                },
                {
                  id: '15',
                  courseName: 'ENGR 2300 Linear Algebra for Engineers',
                  PreOrCoreq: 'MATH 2414 or MATH 2419'
                },
                {
                  id: '16',
                  courseName: 'PHYS 2325 Mechanics',
                  Prereq: 'MATH 2413 or MATH 2417',
                  Coreq: '(MATH 2414 or MATH 2419) and (PHYS 2121 or PHYS 2125)'
                },
                {
                  id: '17',
                  courseName: 'PHYS 2125 Physics Laboratory I',
                  Coreq: 'PHYS 1301 or PHYS 2325 or PHYS 2421'
                }
              ]
            },
            {
              id: '18',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '19',
          year: 'SOPHOMORE',
          semesters: [
            {
              id: '20',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '21',
                  courseName: '060 Core Course'
                },
                {
                  id: '22',
                  courseName: 'ENGR 3300 Advanced Engineering Mathematics',
                  Prereq: '(MATH 2415 or MATH 2419) and ENGR 2300',
                  PreOrCoreq: 'MATH 2420'
                },
                {
                  id: '23',
                  courseName: 'MECH 2310 Statics',
                  Prereq: 'MECH 1208 and (PHYS 2325 and PHYS 2125)',
                  PreOrCoreq: 'MATH 2415 or MATH 2419'
                },
                {
                  id: '24',
                  courseName: 'MATH 2420 Differential Equations with Applications',
                  Prereq: '(MATH 2415 or MATH 2419) and MATH 2418'
                },
                {
                  id: '25',
                  courseName: 'PHYS 2326 Electromagnetism and Waves',
                  Prereq: 'PHYS 2325 and (MATH 2414 or MATH 2419)',
                  Coreq: 'PHYS 2126'
                },
                {
                  id: '26',
                  courseName: 'PHYS 2126 Physics Laboratory II',
                  Coreq: 'PHYS 1302 or PHYS 2326 or PHYS 2422'
                }
              ]
            },
            {
              id: '27',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '28',
                  courseName: '060 Core Course'
                },
                {
                  id: '29',
                  courseName: 'ENGR 3341 Probability Theory and Statistics',
                  RecCoreq: 'MATH 2420',
                  Prereq: 'MATH 2414 or MATH 2419'
                },
                {
                  id: '30',
                  courseName: 'MECH 2320 Mechanics of Materials',
                  Prereq: '(MATH 2415 or MATH 2419) and MECH 2310',
                  Coreq: 'MECH 2120'
                },
                {
                  id: '31',
                  courseName: 'MECH 2120 Mechanics of Materials Laboratory',
                  Coreq: 'MECH 2320'
                },
                {
                  id: '32',
                  courseName: 'MECH 2330 Dynamics',
                  Prereq: 'MECH 2310',
                  PreOrCoreq: 'ENGR 2300 and MATH 2420'
                },
                {
                  id: '33',
                  courseName: 'MECH 3310 Thermodynamics',
                  Prereq: 'MECH 1208 and ENGR 3300 and PHYS 2325',
                  PreOrCoreq: 'CHEM 1311'
                }
              ]
            },
            {
              id: '34',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '35',
          year: 'JUNIOR',
          semesters: [
            {
              id: '36',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '37',
                  courseName: 'GOVT 2305 American National Government'
                },
                {
                  id: '38',
                  courseName: 'ECS 3390 Professional and Technical Communication',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '39',
                  courseName: 'MECH 3305 Computer Aided Design',
                  Prereq: 'MECH 1208 and ENGR 2300',
                  PreOrCoreq: 'CS 1325 or (CE 1337 or CS 1337)',
                  Coreq: 'MECH 3105'
                },
                {
                  id: '40',
                  courseName: 'MECH 3105 Computer Aided Design Laboratory',
                  Coreq: 'MECH 3305'
                },
                {
                  id: '41',
                  courseName: 'MECH 3315 Fluid Mechanics',
                  Prereq: 'MECH 2330 and ENGR 3300',
                  PreOrCoreq: 'MECH 3310'
                },
                {
                  id: '42',
                  courseName: 'MECH 3350 Kinematics and Dynamics of Mechanical Systems',
                  Prereq: 'ENGR 2300 and MATH 2420 and MECH 2330 and ENGR 3300'
                }
              ]
            },
            {
              id: '43',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '44',
                  courseName: 'GOVT 2306 State and Local Government'
                },
                {
                  id: '45',
                  courseName: 'ECS 2361 Social Issues and Ethics in Computer Science and Engineering'
                },
                {
                  id: '46',
                  courseName: 'MECH 3115 Fluid Mechanics Laboratory',
                  Prereq: 'MECH 3315'
                },
                {
                  id: '47',
                  courseName: 'MECH 3150 Kinematics and Dynamics Laboratory',
                  Prereq: 'MECH 3350'
                },
                {
                  id: '48',
                  courseName: 'MECH 3320 Heat Transfer',
                  Prereq: 'MECH 3310 and MECH 3315'
                },
                {
                  id: '49',
                  courseName: 'MECH 3351 Design of Mechanical Systems',
                  Prereq: 'MECH 2320 and ENGR 3300',
                  PreOrCoreq: 'MECH 3350'
                },
                {
                  id: '50',
                  courseName: 'MECH 4310 Systems and Controls',
                  Prereq: 'MECH 3340',
                  Coreq: 'MECH 4110'
                }
              ]
            },
            {
              id: '51',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '52',
          year: 'SENIOR',
          semesters: [
            {
              id: '53',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '54',
                  courseName: '050 Core Course'
                },
                {
                  id: '55',
                  courseName: 'MECH 4381 Senior Design Project I',
                  Prereq: 'MECH 3305 and MECH 3320 and MECH 3351 and MECH 3340 and ECS 3390'
                },
                {
                  id: '56',
                  courseName: 'MECH 3120 Heat Transfer Laboratory',
                  Prereq: 'MECH 3320'
                },
                {
                  id: '57',
                  courseName: 'MECH 4110 Systems and Controls Laboratory',
                  Prereq: 'MECH 3340',
                  Coreq: 'MECH 4310'
                },
                {
                  id: '58',
                  courseName: 'MECH Prescribed Elective'
                },
                {
                  id: '59',
                  courseName: 'MECH Prescribed Elective'
                }
              ]
            },
            {
              id: '60',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '61',
                  courseName: 'UNIV 2020 Core Curriculum Assessment'
                },
                {
                  id: '62',
                  courseName: 'MECH 4382 Senior Design Project II',
                  Prereq: 'MECH 4381'
                },
                {
                  id: '63',
                  courseName: 'Free Elective'
                },
                {
                  id: '64',
                  courseName: 'Free Elective'
                },
                {
                  id: '65',
                  courseName: 'MECH Prescribed Elective'
                },
                {
                  id: '66',
                  courseName: 'MECH Prescribed Elective'
                }
              ]
            },
            {
              id: '67',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        }
      ],
      'Software Engineering': [
        AP,
        {
          id: '1',
          year: 'FRESHMAN',
          semesters: [
            {
              id: '2',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '3',
                  courseName: '060 Core Course'
                },
                {
                  id: '4',
                  courseName: 'MATH 2413 Differential Calculus',
                  Prereq: 'ALEKS 0000 or MATH 2306 or MATH 2312'
                },
                {
                  id: '5',
                  courseName: 'CS 1200 Introduction to Computer Science and Software Engineering'
                },
                {
                  id: '6',
                  courseName: 'CS 1337 Computer Science I',
                  Prereq: 'CS 1336'
                },
                {
                  id: '7',
                  courseName: 'RHET 1302 Rhetoric'
                },
                {
                  id: '8',
                  courseName: 'ECS 1100 Introduction to Engineering and Computer Science',
                  Coreq: 'UNIV 1010'
                },
                {
                  id: '9',
                  courseName: 'UNIV 1010 Freshman Seminar',
                  Coreq: 'ARHM 1100 or ATCM 1100 or BA 1100 or BBSU 1100 or BCOM 1300 or BIS 1100 or ECS 1100 or EPPS 1110 or NATS 1101 or NATS 1142 or UNIV 1100'
                }
              ]
            },
            {
              id: '10',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '11',
                  courseName: '060 Core Course'
                },
                {
                  id: '12',
                  courseName: 'MATH 2414 Integral Calculus',
                  Prereq: ' MATH 2417 or  MATH 2413'
                },
                {
                  id: '13',
                  courseName: 'CS 2305 Discrete Mathematics for Computing I',
                  Prereq: 'ALEKS 0000 or MATH 2312'
                },
                {
                  id: '14',
                  courseName: 'CS 2336 Computer Science II',
                  Prereq: '(CE 1337 or CS 1337)',
                  PreOrCoreq: '(CE 2305 or CS 2305)'
                },
                {
                  id: '15',
                  courseName: 'PHYS 2325 Mechanics',
                  Prereq: 'MATH 2413 or MATH 2417',
                  Coreq: '(MATH 2414 or MATH 2419) and (PHYS 2121 or PHYS 2125)'
                },
                {
                  id: '16',
                  courseName: 'PHYS 2125 Physics Laboratory I',
                  Coreq: 'PHYS 1301 or PHYS 2325 or PHYS 2421'
                }
              ]
            },
            {
              id: '17',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '18',
          year: 'SOPHOMORE',
          semesters: [
            {
              id: '19',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '20',
                  courseName: '040 Core Course'
                },
                {
                  id: '21',
                  courseName: 'GOVT 2305 American National Government'
                },
                {
                  id: '22',
                  courseName: 'SE 3306 Mathematical Foundations of Software Engineering',
                  Prereq: '(CE 2305 or CS 2305)'
                },
                {
                  id: '23',
                  courseName: 'SE 3340 Computer Architecture'
                },
                {
                  id: '24',
                  courseName: 'PHYS 2326 Electromagnetism and Waves',
                  Prereq: 'PHYS 2325 and (MATH 2414 or MATH 2419)',
                  Coreq: 'PHYS 2126'
                },
                {
                  id: '25',
                  courseName: 'PHYS 2126 Physics Laboratory II',
                  Coreq: 'PHYS 1302 or PHYS 2326 or PHYS 2422'
                }
              ]
            },
            {
              id: '26',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '27',
                  courseName: 'MATH 2418 Linear Algebra',
                  Prereq: '  MATH 2306 or MATH 2413 or MATH 2417'
                },
                {
                  id: '28',
                  courseName: 'GOVT 2306 State and Local Government'
                },
                {
                  id: '29',
                  courseName: 'SE 3341 Probability and Statistics in Computer Science and Software Engineering',
                  Prereq: '(MATH 1326 or MATH 2414 or MATH 2419) and (CE 2305 or CS 2305)'
                },
                {
                  id: '30',
                  courseName: 'SE 3345 Data Structures and Introduction to Algorithmic Analysis',
                  Prereq: '(CE 2305 or CS 2305) and (CE 2336 or CS 2336 or CS 2337)',
                  PreOrCoreq: '(CS 3341 or SE 3341 or ENGR 3341)'
                },
                {
                  id: '31',
                  courseName: 'SE 3377 C/C++ Programming in a UNIX Environment',
                  Prereq: '(CE 2336 or CS 2336 or CS 2337)'
                }
              ]
            },
            {
              id: '32',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '33',
          year: 'JUNIOR',
          semesters: [
            {
              id: '34',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '35',
                  courseName: '050 Core Course'
                },
                {
                  id: '36',
                  courseName: 'ECS 3390 Professional and Technical Communication',
                  Prereq: 'RHET 1302'
                },
                {
                  id: '37',
                  courseName: 'SE 3354 Software Engineering',
                  Prereq: '((CE 2336 or CS 2336 or CS 2337) or CS 3333) and (CE 2305 or CS 2305)',
                  PreOrCoreq: 'ECS 3390'
                },
                {
                  id: '38',
                  courseName: 'SE 4348 Operating Systems Concepts',
                  Prereq: '(CS 2340 or SE 3340) and (CS 3377 or SE 3377) and (CE 3345 or CS 3345 or SE 3345)'
                },
                {
                  id: '39',
                  courseName: 'SE Guided Elective'
                }
              ]
            },
            {
              id: '40',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '41',
                  courseName: 'ECS 2361 Social Issues and Ethics in Computer Science and Engineering'
                },
                {
                  id: '42',
                  courseName: 'SE 3162 Professional Responsibility in Computer Science and Software Engineering',
                  PreOrCoreq: 'CS 3345 and CS 3354'
                },
                {
                  id: '43',
                  courseName: 'SE 4347 Database Systems',
                  Prereq: 'CE 3345 or CS 3345 or SE 3345'
                },
                {
                  id: '44',
                  courseName: 'SE 4352 Software Architecture and Design',
                  Prereq: 'SE 3306 and (CE 3354 or CS 3354 or SE 3354)'
                },
                {
                  id: '45',
                  courseName: 'SE 4381 Software Project Planning and Management',
                  Prereq: 'CE 3354 or CS 3354 or SE 3354'
                },
                {
                  id: '46',
                  courseName: 'SE Guided Elective'
                }
              ]
            },
            {
              id: '47',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        },
        {
          id: '48',
          year: 'SENIOR',
          semesters: [
            {
              id: '49',
              semesterName: 'Fall semester',
              courses: [
                {
                  id: '50',
                  courseName: '030 Core Course'
                },
                {
                  id: '51',
                  courseName: 'SE 4351 Requirements Engineering',
                  Prereq: 'SE 3306 and (CE 3354 or CS 3354 or SE 3354)'
                },
                {
                  id: '52',
                  courseName: 'SE 4367 Software Testing, Verification, Validation and Quality Assurance',
                  Prereq: 'SE 3306 and (CE 3354 or CS 3354 or SE 3354)'
                },
                {
                  id: '53',
                  courseName: 'Free Elective'
                },
                {
                  id: '54',
                  courseName: 'SE Guided Elective'
                }
              ]
            },
            {
              id: '55',
              semesterName: 'Spring semester',
              courses: [
                {
                  id: '56',
                  courseName: 'UNIV 2020 Core Curriculum Assessment'
                },
                {
                  id: '57',
                  courseName: 'SE 4485 Software Engineering Project',
                  Prereq: 'SE 4351 or SE 4352 or SE 4367 or SE 4381'
                },
                {
                  id: '58',
                  courseName: 'Free Elective'
                },
                {
                  id: '59',
                  courseName: 'Free Elective'
                },
                {
                  id: '60',
                  courseName: 'SE Guided Elective'
                }
              ]
            },
            {
              id: '61',
              semesterName: 'Summer semester',
              courses: []
            }
          ]
        }
      ]
    }
  },
];