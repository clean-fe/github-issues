export function getIssueTpl() {
  return `
    <div id="issue-wrapper" class="w-9/12 m-auto min-w-min">
    <div id="header" class="flex justify-between">

      <div class="filter-menu w-2/3 px-3 py-1 flex base-outer items-center">
        <div class="filter p-3">Filters</div>
        <form action="/" class="p-3 w-full">
          <input type="text" class="w-full bg-slate-100 focus:outline-none" name="filter-text" id="filter-input"
            placeholder="keyword...">
        </form>
      </div>

      <nav class="flex items-center base-outer ml-4">
        <div id="label-count" class="p-3 border-r h-full flex items-center whitespace-nowrap">Labels</div>
        <div class="p-3">Milestones</div>
      </nav>

      <div class="new-issue p-3 py-1 base-outer flex items-center justify-center w-2/12 ml-4 bg-green-700 text-white">
        <a href="#">New
          issue</a></div>

    </div>
    <div id="issues-wrapper" class="m-auto  base-outer mt-6 bg-slate-100">
      <div class="issue-header h-16 flex justify-between items-center border-b">

        <div class="mr-3 d-none pl-4">
          <input type="checkbox">
        </div>

        <div class="statusTab flex">
          <div class="whitespace-nowrap open-count font-bold cursor-pointer">0 Opens</div>
          <div class="whitespace-nowrap close-count ml-3 cursor-pointer">0 Closed</div>
        </div>

        <div class="details-list flex ml-auto">
          <details>
            <summary>Author</summary>
            <details-menu>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, nemo similique. Aperiam
              exercitationem assumenda, sit deserunt nisi expedita rem harum officiis cumque? Voluptas perferendis in
              perspiciatis repellendus. Saepe, sapiente nisi?</details-menu>
          </details>
          <details>
            <summary>Label</summary>
          </details>
          <details>
            <summary>Projects</summary>
          </details>
          <details>
            <summary>Milestones</summary>
          </details>
          <details>
            <summary>Assignee</summary>
          </details>
          <details>
            <summary>Sort</summary>
          </details>
        </div>

      </div>
      <div class="issue-list flex ml-auto">
        <ul></ul>
      </div>
    </div>
  </div>
    `;
}

export function getIssueItemTpl(item) {
  return `
        <li> 
          <div class="py-4">
              <input type="checkbox">
          </div>
          <div class="items-center ml-4">
              <div class="issue-title font-bold flex">
                  <div>${item.title}</div>
                  <div class='tags ml-4'>
                    ${item.tags.reduce((html, { tagName, color }) => {
                      return `
                        ${html} <span class="rounded-lg border text-white p-1" style="background-color:${color}">${tagName}</span>
                      `;
                    }, ``)}
                  </div>
              </div>
              <div class="issue-description text-xs mt-2">
                ${item._id} ${item.status}ed ${item["open-date"]} ${item.milestones}
              </div>
          </div>
        </li>`;
}

export function getLabelTpl({ isLabelFormHidden, color, labelList, labelName, labelDescription }) {
  return `
  <div id="label-wrapper" class="w-9/12 m-auto min-w-min">

  <div id="header" class="flex justify-between">

    <div class="filter-menu w-2/3 px-3 py-1 flex base-outer items-center">
      <form action="/" class="p-1 w-full">
        <input type="text" class="w-full bg-slate-100 focus:outline-none" name="filter-text" id="filter-input"
          placeholder="search all filter...">
      </form>
    </div>

    <div class="new-label-button cursor-pointer p-1 py-1 base-outer flex items-center justify-center w-2/12 ml-4 bg-green-700 text-white">
      <a href="#">New label</a>
    </div>
  </div>


 <div class="new-label-container"></div>


  <div id="labels-wrapper" class="m-auto  base-outer mt-6 bg-slate-100">
    <div class="label-header h-16 flex justify-between items-center border-b">

      <div class="mr-3 d-none pl-4">
        <div class="whitespace-nowrap open-count font-bold cursor-pointer">${labelList.length} Labels</div>
      </div>

      <div class="details-list flex ml-auto">
        <details>
          <summary>Sort</summary>
        </details>
      </div>

    </div>
    <ul class="label-list ml-auto text-sm bg-white">
    ${labelList.map((label) => getLabelItemTpl(label)).join("")}
    </ul>
  </div>
    <button class="refresh-labels base-outer p-2 mt-2 float-right">update labels</button>
</div>
  `;
}

export function getLabelItemTpl({ name, color, description }) {
  return `
            <li class="label-item flex items-center ml-4 py-3 justify-between border-b ">
                <div class="issue-title flex"> 
                    <span class="rounded-lg border p-1 px-2" style="background-color:#${color}">${name}</span> 
                </div>
                <div class="issue-description ">${description}</div>
                <div class="issue-description ">3 issues </div>
                <div class="label-editor pr-4 ">
                    <button class="edit-button mx-2 ">edit</button>
                    <button class="delete-button">delete</button>
                </div>
            </li>
        `;
}
