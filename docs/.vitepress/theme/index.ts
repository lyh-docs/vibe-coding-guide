// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import SponsorMe from "./SponsorMe.vue";
import BackToTop from "./BackToTop.vue";
import DefaultTheme from "vitepress/theme";
import "./style.css";

const IMAGE_ENHANCED_ATTR = "data-vp-image-enhanced";

function setupDocImageEffects() {
  if (typeof window === "undefined") return;

  const docImages = document.querySelectorAll<HTMLImageElement>(".vp-doc img");
  const overlayId = "vp-image-lightbox";
  let overlay = document.getElementById(overlayId) as HTMLDivElement | null;
  let overlayImg: HTMLImageElement | null = null;

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = overlayId;
    overlay.className = "vp-image-lightbox";
    overlay.innerHTML = `
      <button class="vp-image-lightbox-close" aria-label="Close preview">×</button>
      <img class="vp-image-lightbox-img" alt="Preview image" />
    `;

    overlay.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (
        target.classList.contains("vp-image-lightbox") ||
        target.classList.contains("vp-image-lightbox-close")
      ) {
        overlay?.classList.remove("is-visible");
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        overlay?.classList.remove("is-visible");
        document.body.style.overflow = "";
      }
    });

    document.body.appendChild(overlay);
  }

  overlayImg = overlay.querySelector<HTMLImageElement>(".vp-image-lightbox-img");
  if (!overlayImg) return;

  docImages.forEach((img) => {
    if (img.getAttribute(IMAGE_ENHANCED_ATTR) === "true") return;
    img.setAttribute(IMAGE_ENHANCED_ATTR, "true");

    const wrapper = document.createElement("span");
    wrapper.className = "vp-doc-image-wrap is-loading";

    const parent = img.parentElement;
    if (!parent) return;
    parent.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    const markLoaded = () => wrapper.classList.remove("is-loading");
    if (img.complete) {
      markLoaded();
    } else {
      img.addEventListener("load", markLoaded, { once: true });
      img.addEventListener("error", markLoaded, { once: true });
    }

    img.addEventListener("click", () => {
      overlayImg!.src = img.currentSrc || img.src;
      overlayImg!.alt = img.alt || "Preview image";
      overlay!.classList.add("is-visible");
      document.body.style.overflow = "hidden";
    });
  });
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "doc-footer-before": () => h(SponsorMe),
      "layout-bottom": () => h(BackToTop),
    });
  },
  enhanceApp({ router }) {
    if (typeof window === "undefined") return;

    const refresh = () => {
      window.requestAnimationFrame(() => {
        setupDocImageEffects();
      });
    };

    router.onAfterRouteChanged = refresh;
    refresh();
  },
} satisfies Theme;
