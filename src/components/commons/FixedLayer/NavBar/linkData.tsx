import React from 'react';

export const linkData = [
  {
    name: 'explore',
    link: '/',
    path: '/',
    external: false,
    el: (
      <svg
        width="38"
        height="39"
        viewBox="0 0 38 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="explore"
      >
        <path
          d="M18.5 9.5C12.9771 9.5 8.5 13.9771 8.5 19.5C8.5 25.0229 12.9771 29.5 18.5 29.5C24.0229 29.5 28.5 25.0229 28.5 19.5C28.5 13.9771 24.0229 9.5 18.5 9.5ZM6 19.5C6 12.5964 11.5964 7 18.5 7C25.4035 7 31 12.5964 31 19.5C31 26.4035 25.4035 32 18.5 32C11.5964 32 6 26.4035 6 19.5ZM21.936 16.0749L18.2938 17.3198C17.2493 17.7025 16.5794 18.4244 16.3352 19.2375C16.3306 19.2527 16.3258 19.2679 16.3206 19.2829L15.0748 22.9215L18.7062 21.6802C19.7507 21.2975 20.4206 20.5756 20.6648 19.7625C20.6709 19.742 20.6776 19.7215 20.6849 19.7013L21.303 17.9721L21.936 16.0749ZM24.1187 13.754C24.6435 14.2306 24.847 14.937 24.7064 15.64C24.6961 15.6909 24.6827 15.7411 24.6664 15.7903L23.6702 18.776L23.6616 18.8011L23.0491 20.5145C22.5396 22.1705 21.2271 23.4242 19.5494 24.0337L19.5269 24.0417L14.7953 25.659C14.7619 25.6704 14.7281 25.6804 14.6939 25.6889C14.0648 25.846 13.3803 25.6992 12.8813 25.246C12.3565 24.7694 12.153 24.063 12.2937 23.36C12.3045 23.3059 12.3189 23.2526 12.3368 23.2004L13.9483 18.494C14.4559 16.8339 15.77 15.5768 17.4506 14.9662L17.4731 14.9583L22.2048 13.341C22.2381 13.3296 22.2719 13.3196 22.3061 13.3111C22.9352 13.154 23.6196 13.3008 24.1187 13.754Z"
          fill="#606060"
        />
      </svg>
    ),
  },
  {
    name: 'blog',
    link: '/articles',
    path: '/articles/',
    external: false,
    el: (
      <svg
        width="38"
        height="39"
        viewBox="0 0 38 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="blog"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2637 27.7455H9.30915C8.71824 27.7455 8.12733 27.2727 8.12733 26.6818V23.7273C8.12733 22.1909 8.71824 20.6545 9.78188 19.5909L21.9545 7.3C22.9 6.47273 24.0818 6 25.2636 6C26.4455 6 27.6273 6.47273 28.4545 7.41818C30.2273 9.19091 30.2273 12.1455 28.4545 13.9182L16.2819 26.0909C15.2182 27.1545 13.8001 27.7455 12.2637 27.7455ZM11.4364 21.2455C10.8455 21.8364 10.491 22.6636 10.491 23.6091V25.3818H12.2637C13.091 25.3818 14.0364 25.0273 14.6273 24.4364L26.8 12.2636C27.6273 11.4364 27.6273 9.9 26.8 9.07273C26.4455 8.6 25.8545 8.36364 25.2636 8.36364C24.6727 8.36364 24.0818 8.6 23.6091 8.95455L22.7818 9.78182L24.4364 11.4364C24.9091 11.9091 24.9091 12.6182 24.4364 13.0909C24.2 13.3273 23.9636 13.4455 23.6091 13.4455C23.3727 13.4455 23.0182 13.3273 22.7818 13.0909L21.1273 11.5545L11.4364 21.2455ZM7.18182 29.6364H30.8182C31.5273 29.6364 32 30.1091 32 30.8182C32 31.5273 31.5273 32 30.8182 32H7.18182C6.47273 32 6 31.5273 6 30.8182C6 30.1091 6.47273 29.6364 7.18182 29.6364Z"
          fill="#606060"
        />
      </svg>
    ),
  },
  {
    name: 'about',
    link: '/about',
    path: '/about',
    external: false,
    el: (
      <svg
        width="38"
        height="39"
        viewBox="0 0 38 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="about"
      >
        {/*<rect width="38" height="39" rx="6" fill="#0D0D0D"/>*/}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 19C7 12.4 12.4 7 19 7C25.6 7 31 12.4 31 19C31 25.6 25.6 31 19 31C12.4 31 7 25.6 7 19ZM9.4 19C9.4 24.28 13.72 28.6 19 28.6C24.28 28.6 28.6 24.28 28.6 19C28.6 13.72 24.28 9.4 19 9.4C13.72 9.4 9.4 13.72 9.4 19ZM22.7199 19C22.7199 18.28 23.1999 17.8 23.9199 17.8C24.5199 17.8 25.1199 18.28 25.1199 19C25.1199 22.36 22.3599 25.12 18.9999 25.12C15.6399 25.12 12.8799 22.36 12.8799 19C12.8799 18.28 13.3599 17.8 14.0799 17.8C14.7999 17.8 15.2799 18.28 15.2799 19C15.2799 21.04 16.9599 22.72 18.9999 22.72C21.0399 22.72 22.7199 21.04 22.7199 19Z"
          fill="#606060"
        />
      </svg>
    ),
  },
  {
    name: 'projects',
    link: 'https://henzzo.com/projects',
    path: '/projects',
    external: true,
    el: (
      <svg
        width="38"
        height="39"
        viewBox="0 0 38 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="projects"
      >
        {/*<rect width="38" height="39" rx="6" fill="#0D0D0D" />*/}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.2201 9.83862L17.8629 12.9776L15.5885 15.932L12.2874 20.34H16.6125C17.1973 20.34 17.6713 20.8487 17.6713 21.4764V29.5284L22.4128 23.1477L24.5759 20.311L25.7198 18.7415H21.2789C20.6941 18.7415 20.2201 18.2328 20.2201 17.6051V9.83862ZM21.091 7.11248C21.8111 7.3872 22.3378 8.12873 22.3378 9.06564V16.4688H26.1624C27.0128 16.4688 27.5795 17.0769 27.824 17.6755C28.0617 18.2575 28.0889 19.0277 27.716 19.6797C27.695 19.7163 27.6722 19.7517 27.6475 19.7855L26.2368 21.7212L26.2222 21.7406L24.0559 24.5817L19.0682 31.2938C19.021 31.3572 18.9677 31.415 18.9091 31.4663C18.2991 31.9996 17.5006 32.1343 16.8178 31.8656C16.1008 31.5836 15.5537 30.8629 15.5537 29.902V22.6128H11.8376C10.9871 22.6128 10.4205 22.0047 10.176 21.406C9.93825 20.824 9.9111 20.0538 10.284 19.4018C10.3074 19.3609 10.3332 19.3217 10.3611 19.2843L13.9513 14.4902L16.2262 11.5353L19.0221 7.812C19.5338 7.04855 20.3868 6.84381 21.091 7.11248Z"
          fill="#606060"
        />
      </svg>
    ),
  },
  {
    name: 'contact',
    link: 'https://henzzo.com/contact',
    path: '/contact',
    external: true,
    el: (
      <svg
        width="38"
        height="39"
        viewBox="0 0 38 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="contact"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.36365 14.0774C8.36365 11.9449 9.83625 10.4444 11.4568 10.4444H26.5381C28.1586 10.4444 29.6312 11.9449 29.6312 14.0774V23.9226C29.6312 23.9412 29.6316 23.9597 29.6325 23.9782C29.7241 26.06 28.2825 27.5556 26.6567 27.5556H11.4568C9.83625 27.5556 8.36365 26.0552 8.36365 23.9226V14.0774ZM11.4568 8C8.32739 8 6 10.8153 6 14.0774V23.9226C6 27.1847 8.32739 30 11.4568 30H26.6567C29.7719 30 32.1255 27.1965 31.9948 23.8963V14.0774C31.9948 10.8153 29.6674 8 26.5381 8H11.4568ZM12.4917 13.048C11.9239 12.7152 11.2027 12.9214 10.8809 13.5087C10.559 14.096 10.7585 14.8419 11.3263 15.1747L16.8662 18.4215L16.8851 18.4323C18.2339 19.1896 19.7661 19.1896 21.1149 18.4323L21.1338 18.4215L26.6736 15.1747C27.2415 14.8419 27.4409 14.096 27.1191 13.5087C26.7973 12.9214 26.0761 12.7152 25.5083 13.048L19.9787 16.2888C19.3385 16.6448 18.6614 16.6448 18.0213 16.2888L12.4917 13.048Z"
          fill="#606060"
        />
      </svg>
    ),
  },
];
