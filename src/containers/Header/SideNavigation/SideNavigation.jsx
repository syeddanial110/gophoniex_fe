"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ChevronRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { apiGet } from "@/apis/ApiRequest"
import { ApiEndpoints } from "@/utils/ApiEndpoints"
import { pathLocations, WEB_URL } from "@/utils/navigation"
import Image from "next/image"
import logo from "../../../assets/Images/logo2.png"

const resolveItemHref = (item) => {
  if (item?.id === "home") return item.url
  if (item?.id === "all") return `/user${item.url}`
  return `/user/content${item.url}`
}

const NavItem = ({ item, level = 0 }) => {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = item?.children?.length > 0
  const indent = (level + 1) * 12

  if (hasChildren) {
    return (
      <div className="border-b border-gray-100 last:border-0">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center justify-between w-full py-3 pr-3 text-sm font-medium hover:bg-gray-50 transition-colors"
          style={{ paddingLeft: `${indent}px` }}
        >
          <span>{item.title}</span>
          {expanded ? (
            <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          )}
        </button>
        {expanded && (
          <div className="flex flex-col">
            {item.children.map((child, i) => (
              <NavItem key={child.id ?? i} item={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <SheetClose asChild>
      <Link
        href={item?.id === "programs" ? pathLocations.categories : resolveItemHref(item)}
        className="flex items-center justify-between py-3 pr-3 text-sm font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
        style={{ paddingLeft: `${indent}px` }}
      >
        {item.title}
      </Link>
    </SheetClose>
  )
}

export function SideNavigation() {
  const [headerMenu, setHeaderMenu] = useState([])

  useEffect(() => {
    apiGet(
      `${ApiEndpoints.menu.headerMenu}`,
      (res) => setHeaderMenu(res?.data || []),
      () => setHeaderMenu([]),
    )
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="Open menu">
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0 flex flex-col">
        <SheetHeader className="px-4 py-4 border-b">
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link href={pathLocations.home}>
                <Image src={logo} alt="logo" height={55} width={120} />
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col flex-1 overflow-y-auto">
          {headerMenu.map((item, index) => (
            <NavItem key={item.id ?? index} item={item} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
