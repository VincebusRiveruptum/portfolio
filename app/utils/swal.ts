import Swal from "sweetalert2";

const alert = Swal.mixin({
  showClass: {
    popup: `
        motion-preset-expand 
    `,
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
  },
  customClass: {
    popup: "swal-custom-popup",
  },
});

export { alert };
