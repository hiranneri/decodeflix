module.exports = {
    formatarData(data){
        let dia  = data.split("/")[0];
        let mes  = data.split("/")[1];
        let ano  = data.split("/")[2];
        return `${ano}-${mes}-${dia}`;

    },
    formatarDataBR(dataUS){
        let diaBanco = dataUS;
        let dataBR = new Date(diaBanco);

        let dia  = dataBR.getDate();
        let mes  = dataBR.getMonth()+1;
        let ano  = dataBR.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }
}