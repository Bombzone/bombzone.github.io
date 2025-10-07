const pdf = '/resume.pdf';

const initialState = {
  pdfDoc: null,
  currentPage: 1,
  pageCount: 0,
  zoom: window.devicePixelRatio || 1,
};
var isResizing = false;
document.body.onresize = () => {
  if (!isResizing) {
    isResizing = true;
    setTimeout(() => {
      console.log("here");
      renderPage();
      isResizing = false;
    }, 1000);
  }
}
// Render the page
const renderPage = () => {
  // load the first page
  initialState.pdfDoc.getPage(initialState.currentPage).then((page) => {
    console.log('page', page);
    const canvas = document.querySelector('#canvas');
    const style = window.getComputedStyle(document.getElementById("canvas"));
    const margin = style.marginLeft.split("px")[0];

    const ctx = canvas.getContext('2d');
    const width = window.innerWidth - margin;
    const initialVP = page.getViewport({ scale: 1, });
    const scale = width / initialVP.width;
    const viewport = page.getViewport({ scale: scale, });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    const renderCtx = {
      canvasContext: ctx,
      viewport: viewport,
    };
    page.render(renderCtx);
  });
};

// Load the Document
pdfjsLib
  .getDocument(pdf)
  .promise.then((data) => {
    initialState.pdfDoc = data;
    console.log('pdfDocument', initialState.pdfDoc);
    renderPage();
  })
  .catch((err) => {
    alert(err.message);
  });

// Tooltip

const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
