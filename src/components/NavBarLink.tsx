import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { NavLinkProps } from "../types/types"




const NavBarLink = ({navItems, onClick }: NavLinkProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  const baseClasses =
    "block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200 font-medium"

  const activeClasses =
    navItems.pageLink && location.pathname === navItems.pageLink ? " text-white bg-white/10" : ""

  // Internal route
  if (navItems.pageLink) {
    return (
      <Link
        to={navItems.pageLink}
        onClick={onClick}
        className={`${baseClasses}${activeClasses}`}
      >
        {navItems.label}
      </Link>
    )
  }

  // Hash or external link
  if (navItems.href) {
   
    const handleClick = (e: React.MouseEvent) => {
      if (navItems.href && navItems.href.startsWith("#")) {
        e.preventDefault()
        if (location.pathname !== "/") {
          // navigate to home, then scroll
          navigate("/", { state: { scrollTo: navItems.href } })
        } else {
          // already home → just scroll
          const el = document.querySelector(navItems.href)
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }
      }
      if (onClick) onClick()
    }

    return (
      <a
        href={navItems.href}
        onClick={handleClick}
        className={baseClasses}
      >
        {navItems.label}
      </a>
    )
  }

  return null
}

export default NavBarLink
