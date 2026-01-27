  export function ScrollReveal(){ const isElementInViewport = (el: Element): boolean => {
        const rect: DOMRect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        return (
          rect.top <= windowHeight - 150 &&
          rect.left <=
            (window.innerWidth || document.documentElement.clientWidth) &&
          rect.bottom >= 0 &&
          rect.right >= 0
        );
      };

      const handleScrollReveal = () => {
        const elements: NodeListOf<Element> =
          document.querySelectorAll(".reveal-on-scroll");
        elements.forEach((element: Element) => {
          if (isElementInViewport(element)) {
            if (element instanceof HTMLElement) {
              element.classList.add("active");
            }
          }
        });
      };

      window.addEventListener("scroll", handleScrollReveal);
      handleScrollReveal();

      return () => {
        window.removeEventListener("scroll", handleScrollReveal);
      }}