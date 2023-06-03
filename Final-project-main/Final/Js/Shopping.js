const container = document.querySelector('.container.img1.p-3.d-flex')

let computers

function cardCr() {
    computers = JSON.parse(localStorage.getItem('computers'))

    computers.forEach(comp => {
        container.innerHTML += `
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
                                  <p>VideoCard: ${comp.videocard}GB</p>
                                  <p>Processor or CPU: ${comp.processororcpu}</p>
                                </div>
                          
                                <!-- Modal footer -->
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                          
                              </div>
                            </div>
                          </div>
                    </div>`
    });
}

cardCr()