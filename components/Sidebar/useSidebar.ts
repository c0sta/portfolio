import { useRef } from "react";
import { SidebarProps } from "./Sidebar";

export const useSidebar = () => {
  const summaryRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const experiencesRef = useRef<HTMLElement | null>(null);
  const contactsRef = useRef<HTMLElement | null>(null);

  const navOptions: SidebarProps["navOptions"] = [
    {
      key: "about",
      label: "About",
      ref: summaryRef,
    },
    {
      key: "projects",
      label: "Projects",
      ref: projectsRef,
    },
    {
      key: "experiences",
      label: "Experiences",
      ref: experiencesRef,
    },
    {
      key: "contacts",
      label: "Contacts",
      ref: contactsRef,
    },
  ];

  return {
    navOptions,
    sectionsRef: { summaryRef, projectsRef, experiencesRef, contactsRef },
  };
};
