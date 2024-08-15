// test.js
function searchText() {
    var input, filter, sections, section, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    sections = document.querySelectorAll('.content-section');

    // Loại bỏ màu vàng cũ và cuộn đến phần tử phù hợp
    sections.forEach(sec => {
        sec.style.backgroundColor = ''; // Xóa màu vàng cũ
        sec.scrollIntoView({ behavior: 'smooth' }); // Cuộn đến phần tử
    });

    for (i = 0; i < sections.length; i++) {
        section = sections[i];
        txtValue = section.textContent || section.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            section.style.backgroundColor = 'yellow'; // Tô vàng phần tử phù hợp

            // Xóa màu vàng sau 2 giây
            setTimeout(() => {
                section.style.backgroundColor = '';
            }, 2000);
        }
    }
}
