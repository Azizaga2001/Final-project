const container = document.querySelector('.container.img1.p-3')

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
  });
}

cardCr()

for (let i = 0; i < 10; i++) {
  container.innerHTML += `<div class="Card">
  <img class="img" src="../img/acer.jpg" alt="">
  <p>Model: Acer</p>
  <p>OC: Win11Home</p>
  <p>New: True</p>
  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">in detail</button>
  <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
    
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">in detail</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
    
          <!-- Modal body -->
          <div class="modal-body">
            <p>Model: Acer</p>
            <p>OC: Win11Home</p>
            <p>MemoryTip: HDD</p>
            <p>Price: 500$</p>
            <p>RAM: 268GB</p>
            <p>Memory: 2000GB</p>
            <p>VideoCard: 10000GB</p>
            <p>Processor or CPU: Intel(I9)</p>
            <img class="img" src="../img/acer.jpg" alt="">
          </div>
    
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>
    
        </div>
      </div>
    </div>`
}