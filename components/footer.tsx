"use client"

import { ArrowUp, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
          {/* Company Info Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              {/* Logo  */}
              <img src="https://www.skaiworldwide.com/_next/static/media/SKAI%20worldwide%20basic%20logo.f06b4cc8.png" alt="" />

              {/* Social Media Icons */}
              <div className="flex space-x-2 mb-6 pl-2">
                <Link
                  href="https://linkedin.com"
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://youtube.com"
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Youtube size={20} />
                </Link>
              </div>

              {/* Company Details */}
              <div className="text-sm space-y-2 text-gray-700 pl-2">
                <p className="font-medium">SKAI Worldwide</p>
                <p>CEO: Dean Shin</p>
                <p>Business registration number: 220-88-68408</p>
                <p>Address: 516, Teheran-ro, Gangnam-gu, Seoul (06180)</p>
                <p>Contact us: 070-4800-3517</p>
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
              {/* Company Column */}
              <div>
                <h3 className="text-base font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">Intro</span>
                    </Link>
                  </li>
                  <li>
                      <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">Leadership</span>
                    </Link>
                  </li>
                  <li className="pt-8">
                    <h3 className="text-base font-semibold mb-4">Career</h3>
                  </li>
                </ul>
              </div>

              {/* Product Column */}
              <div>
                <h3 className="text-base font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">AI</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">DBMS</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">Ontology</span>
                    </Link>
                  </li>
                  <li className="pt-8">
                    <h3 className="text-base font-semibold mb-4">Family Site</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className="text-gray-600 hover:text-blue-500 group flex items-center transition-all"
                        >
                          <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                          <span className="group-hover:translate-x-1 transition-transform">SKAI Intelligence</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-600 hover:text-blue-500 group flex items-center transition-all"
                        >
                          <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                          <span className="group-hover:translate-x-1 transition-transform">Directors Company</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-600 hover:text-blue-500 group flex items-center transition-all"
                        >
                          <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                          <span className="group-hover:translate-x-1 transition-transform">Creative Air</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Service Column */}
              <div>
                <h3 className="text-base font-semibold mb-4">Service</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">PGTS</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">Education</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">Tech Portal</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resource Column */}
              <div>
                <h3 className="text-base font-semibold mb-4">Resource</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">Manual</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">White Paper</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsroom & IR Column */}
              <div>
                <h3 className="text-base font-semibold mb-4">Newsroom</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-blue-500 group flex items-center transition-all">
                      <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                      <span className="group-hover:translate-x-1 transition-transform">Press Release</span>
                    </Link>
                  </li>
                  <li className="pt-8">
                    <h3 className="text-base font-semibold mb-4">IR</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className="text-gray-600 hover:text-blue-500 group flex items-center transition-all"
                        >
                          <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                          <span className="group-hover:translate-x-1 transition-transform">Report</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-600 hover:text-blue-500 group flex items-center transition-all"
                        >
                          <span className="text-transparent group-hover:text-blue-500 mr-1 transition-all">»</span>
                          <span className="group-hover:translate-x-1 transition-transform">CI</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200 py-6 relative">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>Copyright © 2025 SKAI Worldwide Co., Ltd. All Rights Reserved.</p>
          <Link href="https://www.skaiworldwide.com/en-US/about-us" className="text-xs text-gray-500 mt-2 block">
            https://www.skaiworldwide.com/en-US/about-us
          </Link>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 bg-white rounded-full p-3 shadow-md border border-gray-200 transition-all duration-300 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-blue-600" />
        </button>
      </div>
    </footer>
  )
}
