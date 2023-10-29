function searchFocus()
{
    document.getElementById("search-sug-box").style.display = 'block'
    document.getElementById("search-container").style.transform = "translateY(-10%)"
    document.getElementById("search-container").style.border = '2px solid rgba(0, 119, 255, 0.642)'
    document.getElementById("search-sug-header").innerText = 'Recent Searches'
}

function searchBlur()
{
    document.getElementById("search-container").style.border = '2px solid rgba(0, 0, 0, 0.08)'
    document.getElementById("search-container").style.transform = "translateY(10%)"
    document.getElementById("search-sug-box").style.display = 'none'
}

function searchKeyInput()
{
    document.getElementById("search-sug-header").innerText = 'All Results'
}

function searchFocusDark()
{
    document.getElementById("search-sug-box-dark").style.display = 'block'
    document.getElementById("search-container-dark").style.transform = "translateY(-10%)"
    document.getElementById("search-container-dark").style.border = '2px solid rgba(0, 119, 255, 0.907)'
    document.getElementById("search-sug-header-dark").innerText = 'Recent Searches'
    document.body.style.backgroundColor = '#121212'
    document.getElementById("page-heading").style.color = 'rgb(169, 169, 169)'
}

function searchBlurDark()
{
    document.getElementById("search-container-dark").style.border = '2px solid rgba(0, 0, 0, 0.08)'
    document.getElementById("search-container-dark").style.transform = "translateY(10%)"
    document.getElementById("search-sug-box-dark").style.display = 'none'
    document.body.style.transitionDuration = '0.2s'
    document.body.style.backgroundColor = '#ffffff'
    document.getElementById("page-heading").style.color = 'black'
}

function searchKeyInputDark()
{
    document.getElementById("search-sug-header-dark").innerText = 'All Results'
}