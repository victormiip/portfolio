function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')

    // CONTROLE DE IMAGEM 
    if (profileData.photo) {
        photo.src = profileData.photo
    }
    photo.alt = profileData.name




    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const pessoa = document.getElementById("profile.pessoa")
    pessoa.innerText = profileData.pessoa

    const gps = document.getElementById("profile.gps")
    gps.innerText = profileData.gps

    const whatsapp = document.getElementById("profile.whatsapp")
    whatsapp.innerText = profileData.whatsapp
    whatsapp.href = `tel:${profileData.whatsapp}`

    const email = document.getElementById("profile.email")
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    ).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')

    languages.innerHTML = profileData.languages.map(language =>
        `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(project => `
        <li>
            <h3 class="${project.github ? 'github' : ''}">${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>
    `).join('')
}


function updateXp(profileData) {
    const xp = document.getElementById('profile.xp')

    xp.innerHTML = profileData.xp.map(experience =>
        `<li>
            <h3 class="title">${experience.name}</h3>
            <p class="data">${experience.period}</p>
            <p>${experience.description}</p>
        </li>`).join('')
}





(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateXp(profileData)


    console.log(profileData);
})()
