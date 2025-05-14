
$(document).ready(() => {
  // Initialize Lucide icons
  lucide.createIcons()

  // Sidebar toggle
  $("#sidebar-toggle").on("click", () => {
    $("#sidebar").toggleClass("open")
    $("#sidebar-overlay").toggleClass("visible")
  })

  // Close sidebar when clicking overlay
  $("#sidebar-overlay").on("click", () => {
    $("#sidebar").removeClass("open")
    $("#sidebar-overlay").removeClass("visible")
  })

  // Close sidebar when clicking anywhere outside the sidebar (new functionality)
  $(document).on("click", (event) => {
    // Only apply this on mobile devices (screen width <= 768px)
    if ($(window).width() <= 768) {
      // Check if the click is outside the sidebar and the sidebar toggle button
      if (!$(event.target).closest("#sidebar").length && !$(event.target).closest("#sidebar-toggle").length) {
        $("#sidebar").removeClass("open")
        $("#sidebar-overlay").removeClass("visible")
      }
    }
  })

  // Prevent clicks inside sidebar from closing it
  $("#sidebar").on("click", (event) => {
    event.stopPropagation()
  })

  // Search toggle
  $("#search-toggle").on("click", () => {
    $(".search-container").toggleClass("open")
  })

  // Version dropdown
  $("#version-button").on("click", (e) => {
    e.stopPropagation()
    $("#version-dropdown").toggleClass("show")
  })

  // Close version dropdown when clicking outside
  $(document).on("click", () => {
    $("#version-dropdown").removeClass("show")
  })

  // Prevent dropdown from closing when clicking inside it
  $("#version-dropdown").on("click", (e) => {
    e.stopPropagation()
  })

  // Select version
  $(".version-dropdown-item").on("click", function () {
    const version = $(this).data("value")
    $("#selected-version").text($(this).text())
    $(".version-dropdown-item").removeClass("selected")
    $(this).addClass("selected")
    $("#version-dropdown").removeClass("show")
  })

  // Product category toggle
  $(".product-category-toggle").on("click", function () {
    const category = $(this).closest(".product-category")
    category.toggleClass("collapsed")

    // Save state to localStorage
    const categoryId = category.attr("id")
    if (categoryId) {
      localStorage.setItem(`category-${categoryId}`, category.hasClass("collapsed") ? "collapsed" : "expanded")
    }
  })

  // Restore category state from localStorage
  $(".product-category").each(function () {
    const categoryId = $(this).attr("id")
    if (categoryId) {
      const state = localStorage.getItem(`category-${categoryId}`)
      if (state === "collapsed") {
        $(this).addClass("collapsed")
      }
    }
  })

  // Back to top button
  const backToTopButton = $("#back-to-top")

  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 300) {
      backToTopButton.addClass("visible")
    } else {
      backToTopButton.removeClass("visible")
    }
  })

  backToTopButton.on("click", () => {
    $("html, body").animate({ scrollTop: 0 }, "smooth")
  })

  // Check device size on page load and set sidebar state accordingly
  function checkDeviceSize() {
    if ($(window).width() <= 768) {
      // On small devices, sidebar should be collapsed by default
      $("#sidebar").removeClass("open")
      $("#sidebar-overlay").removeClass("visible")
      localStorage.setItem("sidebar-state", "closed")
    } else {
      // On larger devices, restore from localStorage or default to open
      const sidebarState = localStorage.getItem("sidebar-state")
      if (sidebarState === "open" || sidebarState === null) {
        $("#sidebar").addClass("open")
      } else {
        $("#sidebar").removeClass("open")
      }
    }
  }

  // Run on page load
  checkDeviceSize()

  // Also run when window is resized
  $(window).on("resize", () => {
    checkDeviceSize()
  })

  // Save sidebar state when toggled
  $("#sidebar-toggle").on("click", () => {
    const isOpen = $("#sidebar").hasClass("open")
    localStorage.setItem("sidebar-state", isOpen ? "open" : "closed")
  })
})
