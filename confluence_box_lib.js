function add_box_link_as(el_type, box_file_link) {
  parent_el = document.currentScript.parentNode
  box_token = JSON.parse(window.localStorage[Object.keys(window.localStorage).filter(x=>x.includes('box.token'))]).value
  console.log(box_token)
  fetch('https://api.box.com/2.0/shared_items', {
      headers: {
        Authorization: 'Bearer ' + box_token,
        BoxApi:    'shared_link=' + box_file_link
      }
  }).then(resp => resp.json()).then(function (json) {
    el = document.createElement('br')
    parent_el.appendChild(el)
    el = document.createElement(el_type)
    parent_el.appendChild(el)
    el.controls = true
    el.src = 'https://api.box.com/2.0/files/' + json.id + '/content?access_token=' + box_token
    el.load()
  })
}
