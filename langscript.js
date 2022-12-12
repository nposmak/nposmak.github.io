let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("#switch"),
    me = document.querySelector("#me"),
    address = document.querySelector("#address"),
    aboutTitle = document.querySelector("#about-title"),
    about = document.querySelector("#about"),
    skillsTitle = document.querySelector("#skills-title"),
    keySkills = document.querySelector("#key-skills"),
    myLangs = document.querySelector("#my-langs"),
    native = document.querySelector("#native"),
    foreign = document.querySelector("#foreign"),

    experienceTitle = document.querySelector("#experience-title"),
    job1 = document.querySelector("#job-1"),
    position1 = document.querySelector("#position-1"),
    duties1 = document.querySelector("#duties-1"),
    orgname1 = document.querySelector("#org-name1"),
    position1Name = document.querySelector("#position-1-name"),

    p1 = document.querySelector("#p1"),
    p2 = document.querySelector("#p2"),
    p3 = document.querySelector("#p3"),
    p4 = document.querySelector("#p4"),
    p5 = document.querySelector("#p5"),

    job2 = document.querySelector("#job-2"),
    orgname2 = document.querySelector("#org-name2"),
    position2 = document.querySelector("#position-2"),
    position2Name = document.querySelector("#position-2-name"),
    duties2 = document.querySelector("#duties-2"),
    p6 = document.querySelector("#p6"),
    p7 = document.querySelector("#p7"),
    p8 = document.querySelector("#p8")

    educationTitle = document.querySelector("#education-title")
    degree = document.querySelector("#education-degree")
    university = document.querySelector("#university")
    courses = document.querySelector("#courses")




    link.forEach(el=>{
        el.addEventListener("click", ()=>{
            langs.querySelector(".active").classList.remove("active");
            el.classList.add("active");
   
            let attr = el.getAttribute("language")
            me.textContent = data[attr].me
            address.textContent = data[attr].address 
            aboutTitle.textContent = data[attr].aboutTitle
            about.textContent = data[attr].about
            skillsTitle.textContent = data[attr].skillsTitle
            keySkills.textContent = data[attr].keySkills
            myLangs.textContent = data[attr].myLangs
            native.textContent = data[attr].native
            foreign.textContent = data[attr].foreign

            experienceTitle.textContent = data[attr].experienceTitle
            job1.textContent = data[attr].job1
            position1.textContent = data[attr].position1
            duties1.textContent = data[attr].duties1
            orgname1.textContent = data[attr].orgname1
            position1Name.textContent = data[attr].position1Name

            p1.textContent = data[attr].p1
            p2.textContent = data[attr].p2
            p3.textContent = data[attr].p3
            p4.textContent = data[attr].p4
            p5.textContent = data[attr].p5

            job2.textContent = data[attr].job2
            orgname2.textContent = data[attr].orgname2
            position2.textContent = data[attr].position2
            position2Name.textContent = data[attr].position2Name
            duties2.textContent = data[attr].duties2
            p6.textContent = data[attr].p6
            p7.textContent = data[attr].p7
            p8.textContent = data[attr].p8

            educationTitle.textContent = data[attr].educationTitle
            degree.textContent = data[attr].degree
            university.textContent = data[attr].university
            courses.textContent = data[attr].courses

            
            
             
        })
   })

let data = {
    russian: {
        me: "Посмак Никита Михайлович",
        address: " : Санкт-Петербург",
        aboutTitle: "Обо мне:",
        about :"Инженер-программист с опытом разработки и поддержки программного обеспечения для автоматизации бизнес\
         процессов предприятия. Умею и знаю, что значит работать в команде. Всегда открыт для нового опыта и знаний.",
        skillsTitle: "Ключевые навыки:",
        keySkills: "Ключевые навыки:",
        myLangs: "Языки:",
        native: "Русский",
        foreign: "Английский (С1)",
        experienceTitle: "Опыт работы:",
        job1: "Место работы:",
        position1: "Должность:",
        duties1: "Обязанности:",
        orgname1: "ООО Газпром трансгаз Ухта",
        position1Name: " младший инженер программист отдела программного обеспечения",
        p1: "Разработка api локальных информационно-управляющих систем, реализация бизнес логики \
        (Java 11, SpringBoot, Spring Data JPA, Spring Security, PostgreSQL, Redis, Vue2);",
        p2: "Поддержка существующего программного обеспечения;",
        p3: "Модульное тестирование;",
        p4: "Разработка интерфейсов;",
        p5: "Составление документации на разработку локальных информационно-управляющих систем (ТЗ).",

        job2: "Место работы:",
        orgname2: " ООО Газпром трансгаз Ухта",
        position2: "Должность:",
        position2Name: " инженер 1 категории отдела АСУТП",
        duties2: "Обязанности:",
        p6: "Режимная наладка, испытания, техническое обслуживание и ремонт систем автоматического управления \
        электромагнитным подвесом (САУ ЭМП) и смежных систем автоматизации;",
        p7: "Программирование микроконтроллеров на закрытых встроенных языках;",
        p8: "Составление документации по результатам испытаний систем (протоколы, отчеты), составление \
        нормативно-технической документации (технические регламенты, стандарты).",

        educationTitle: "Образование:",
        degree: "Магистр - Управление в технических ситемах",
        university: "Санкт-Петербургский государственный электротехнический университет имени В.И.Ульянова (Ленина) «ЛЭТИ» \
        .<br>Факультет компьютерных технологий и информатики.",
        courses: "Сертификаты и курсы:"


    },
    english : {
        me: "Posmak Nikita",
        address: " : Saint-Petersburg",
        aboutTitle: "About me:",
        about : "Software developer with strong technical background. Responsible, easy-going and open-minded person, \
        eager to learn something new and share getting knowledge with others.\
        Looking for new challenges and opportunities outside Russia to get a new experience in the process\
        of developing new unique products.",
        skillsTitle: "Skills:",
        keySkills: "Key skills:",
        myLangs: "Languages:",
        native: "Russian",
        foreign: "English (C1)",
        experienceTitle: "Experience:",
        job1: "Company:",
        position1: "Position:",
        duties1: "Duties:",
        orgname1: " Gazprom transgaz Uchta",
        position1Name: " junior software developer",
        p1: "CRM systems development (Java 11, SpringBoot, Spring Data JPA, Spring Security, PostgreSQL, Redis, Vue2)",
        p2: "Application support, optimization of backend process;",
        p3: "Unit and manual testing;",
        p4: "Users interface development",
        p5: "Technical specifications development",

        job2: "Company:",
        orgname2: " Gazprom transgaz Uchta",
        position2: "Position:",
        position2Name: " industrial automatic control system (IACS) engineer",
        duties2: "Duties:",
        p6: "Installation and start-up, technical maintenance of magnetic bearings control systems and \
         communicating automation systems;",
        p7: "Microcontrollers programming;",
        p8: "Technical specifications development.",

        educationTitle: "Education:",
        degree: "Master’s degree program: «Control in technical systems».",
        university: "Saint Petersburg Electrotechnical University ETU «LETI» \
        Faculty of computer science and technology.",
        courses: "Certificates and courses:"

    }
}
