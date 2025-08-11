function mubu() {
	let formdata = new FormData();
    formdata.append('code', "9642-9716-0768-8881");
    fetch("https://mubu.com/api/upgrade/use_code", {
		method: "POST",
		body: formdata
	}).then((res) => {
		console.log('续费成功')
	},
	err => {
		console.log(err)
	}).
	catch(err => {
		console.log(err)
	})
}
setInterval(mubu, 1000)