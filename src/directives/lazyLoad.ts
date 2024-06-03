import type { Directive } from 'vue'

export const DEFAULT_POSTER = '../assets/images/not_found.jpg'

export const global_lazyLoad_directive: Directive = {
  mounted(el: HTMLElement) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.getAttribute('data-src')

          if (src) {
            img.setAttribute('src', src)
            img.onerror = function () {
              this.onerror = null
              this.src = new URL(DEFAULT_POSTER, import.meta.url).href
            }
            observer.disconnect()
          }
        }
      })
    })

    observer.observe(el)
  }
}
