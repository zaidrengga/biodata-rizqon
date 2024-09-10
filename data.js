function getData() {
    const data = fetch('./data.json').then(res => res.json())
    return data
  }
  
  async function friendListsElement() {
    const friendLists = document.getElementById("friend_list");
    const data = await getData() 
    const lists = `
      ${data.map(i => `
        <li>
          <figure class="card">
            <div class="card_header">
              <div class="card_image">
                <img src="${i.fotoselfie}" alt="${i.nama}" width="100%">
              </div>
            </div>
            <figcaption class="card_content">
            <table>
              <tr>
                <td><span>Nama : ${i.nama}</span>
              </tr>
              <tr>
                <td><span>NIM : ${parseInt(i.nim)}</span>
              </tr>
              <tr>
                <td><span>TTL : ${i.ttl}</span>
              </tr>
              <tr>
                <td><span>Alamat : ${i.alamat}</span>
              </tr>
              <tr>
                <td><span>No. HP : ${i.no}</a></span>
              </tr>
              </table>
              <div class="social-icons">
                  <a href="https://wa.me/+62${i.no}">
                      <i class='bx bxl-whatsapp'></i>WhatsApp
                  </a>
              </div>
            </figcaption>
          </figure>
        </li>
      `).join("")}
    `;
  
    return friendLists.innerHTML = lists
  }
  
  friendListsElement()