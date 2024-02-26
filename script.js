const employees = [
    {
      id: 1,
      name: "Aram Vardevanyan",
      age: 22,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Junior" },
      contact: { email: "aram.vardevanyan@coderepublic.am", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },

    {
      id: 2,
      name: "Grisha Harutyunyan",
      age: 25,
      department: "Engineering",
      role: { title: "BackEnd Developer", level: "Junior" },
      contact: { email: "grisha.harutyunyan@coderepublic.am", phone: "098-765-6789" },
      skills: ["Node.js", "SQL", "Next.js"]
    },

    {
        id: 3,
        name: "Qristina Pashayan",
        age: 23,
        department: "Design",
        role: { title: "UI/UX Designer", level: "Junior" },
        contact: { email: "qristina.pashayan@coderepublic.am", phone: "098-765-4321" },
        skills: ["Figma", "Sketch", "Adobe XD"]
    },

    {
        id: 4,
        name: "Yeranuhi Galstyan",
        age: 21,
        department: "Android Developer",
        role: { title: "UI/UX Designer", level: "Junior" },
        contact: { email: "yeranuhi.galstyan@coderepublic.am", phone: "098-853-4321" },
        skills: ["Vue.js", "Flutter", "React.js"]
    },

    {
        id: 5,
        name: "Artur Gevorgyan",
        age: 27,
        department: "Engineering",
        role: { title: "BackEnd Developer", level: "Junior" },
        contact: { email: "artur.gevorgyan@coderepublic.am", phone: "077-765-4781" },
        skills: ["Java", "C++", "Spring"]
    },
  ];



function createTable(data) {
    const table = document.getElementById('dynamicTable');
    for (let i = 0; i < data.length; ++i) {
        const row = ` <tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].department}</td>
                        <td>${data[i].role.title}</td>
                        <td>${data[i].role.level}</td>
                        <td>${data[i].contact.email}</td>
                        <td>${data[i].contact.phone}</td>
                        <td>${data[i].skills.join(', ')}</td>

                    </tr>`;
          table.insertAdjacentHTML('beforeend', row);            
    }
}

createTable(employees);