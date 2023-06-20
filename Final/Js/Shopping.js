const container = document.querySelector('.container.img1.p-3');
const nav = document.querySelector(".nav")
const tabContent = document.querySelector(".tab-content")

let computers = []
const users = JSON.parse(localStorage.getItem('Users'))

let marks = []

function cardCr() {
  for (let user of users) {
    for (let comp of user.computers) {
      computers.push(comp)
      if(!marks.includes(comp.mark)){
        marks.push(comp.mark)
      }
    }
  }

  marks.forEach((mark) => {
    nav.innerHTML += `<button class="nav-link" id="v-pills-${mark}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${mark}" type="button" role="tab" aria-controls="v-pills-${mark}" aria-selected="true">
                        ${mark}
                      </button>`;
    tabContent.innerHTML += `<div class="tab-pane fade" id="v-pills-${mark}" role="tabpanel" aria-labelledby="v-pills-${mark}-tab" tabindex="0"></div>`;
  })

  const tabPanes = document.querySelectorAll(".tab-pane")
  for (let pane of tabPanes) {
    for (let comp of computers) {
      if (pane.id == `v-pills-${comp.mark}`) {
        pane.innerHTML += `
                    <div class="Card">
                        <img class="img" src="${comp.img}" alt="">
                        <p>Model: ${comp.mark}</p>
                        <p>OC: ${comp.oc}</p>
                        <p>New: True</p>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal${comp.id}">in detail</button>
                        <div class="modal" id="myModal${comp.id}">
                            <div class="modal-dialog">
                              <div class="modal-content">
                          
                                <!-- Modal Header -->
                                <div class="modal-header">
                                  <h4 class="modal-title">in detail</h4>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                          
                                <!-- Modal body -->
                                <div class="modal-body">
                                  <p>Model: ${comp.mark}</p>
                                  <p>OC: ${comp.oc}</p>
                                  <p>MemoryTip: ${comp.memorytip}</p>
                                  <p>Price: ${comp.price}</p>
                                  <p>RAM: ${comp.ram}GB</p>
                                  <p>Memory: ${comp.memory}GB</p>
                                  <p>VideoCard(GB): ${comp.videocardgb}GB</p>
                                  <p>VideoCard: ${comp.videocard}</p>
                                  <p>Processor or CPU: ${comp.processororcpu}</p>
                                  <img class="img" src="${comp.img}" alt="">
                                </div>
                          
                                <!-- Modal footer -->
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                          
                              </div>
                            </div>
                          </div>
                    </div>`
      };
    };
  };
};

cardCr();