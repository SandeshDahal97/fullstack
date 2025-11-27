const menuButton = document.getElementById("menu-button")
const navLinks = document.querySelector(".nav-links")

function toggleMenu() {
  navLinks.classList.toggle("open")
  const isExpanded = navLinks.classList.contains("open")
  menuButton.setAttribute("aria-expanded", isExpanded)
  menuButton.innerHTML = isExpanded ? "✕" : "☰"
}

menuButton.addEventListener("click", toggleMenu)

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
      toggleMenu()
    }
  })
})

const scrollIndicator = document.querySelector(".scroll-indicator")

function updateScrollIndicator() {
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrolled = window.scrollY
  const scrollPercent = (scrolled / windowHeight) * 100
  scrollIndicator.style.width = scrollPercent + "%"
}

window.addEventListener("scroll", updateScrollIndicator)

const contactForm = document.getElementById("contact-form")
const formMessage = document.getElementById("form-message")

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const nameInput = document.getElementById("name").value.trim()
    const emailInput = document.getElementById("email").value.trim()
    const subjectInput = document.getElementById("subject").value.trim()
    const messageInput = document.getElementById("message").value.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidEmail = emailRegex.test(emailInput)

    formMessage.textContent = ""
    formMessage.style.color = ""

    if (!nameInput || !emailInput || !subjectInput || !messageInput) {
      formMessage.textContent = "❌ Please fill out all required fields."
      formMessage.style.color = "#ef4444"
      return
    }

    if (!isValidEmail) {
      formMessage.textContent = "❌ Please enter a valid email address."
      formMessage.style.color = "#ef4444"
      return
    }

    formMessage.textContent = "✓ Thank you for your message! I will be in touch shortly."
    formMessage.style.color = "#22c55e"

    contactForm.reset()

    setTimeout(() => {
      formMessage.textContent = ""
    }, 5000)
  })
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(20px)"
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(card)
})

document.querySelectorAll(".skill-item").forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "translateY(20px)"
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(item)
})
