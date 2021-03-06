function createRows(grid, size = 16) {
    for(let rows = 0; rows < size; rows++) {
      const row = document.createElement("div")
  
      row.classList.add("row");
      row.style.cssText = `height: ${100 / size}%`;
      grid.appendChild(row);
      addCells(row, size)
    }
  }
  
  function addCells(row, size = 16) {
    for(let cells = 0; cells < size; cells++) {
      const cell = document.createElement("div")
  
      cell.classList.add("cell");
      cell.style.cssText = `opacity: 0; width: ${100 / size}%`;
      cell.addEventListener("mouseover", blackHover)
      row.appendChild(cell)
    }
  }
  
  function blackHover() {
    this.style.background = "#000";
    this.style.opacity = parseFloat(this.style.opacity) + 0.2;
  }
  
  function multiColorHover() {
    const cells = document.querySelectorAll(".cell")
  
    cells.forEach(function(cell) {
      cell.addEventListener("mouseover", function(e) {
        const color =  "#" + Math.random().toString(16).slice(4, 10);
  
        e.target.style.background = color;
        e.target.style.opacity = parseFloat(this.style.opacity) + 0.2;
      })
    })
  }
  
  function clearGrid() {
    const grid = document.querySelector(".grid")
    const size = prompt("What size would you like the new grid to be? (size x size)")
  
    grid.innerHTML = "";
    createRows(grid, size)
  }
  
  document.querySelector(".knob__left").addEventListener("click", clearGrid)
  document.querySelector('.knob__right').addEventListener("click", multiColorHover)
  
  const grid = document.querySelector(".grid")
  createRows(grid, 16)
  