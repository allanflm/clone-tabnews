function status(request, response) {
  response.status(200).json({ chave: "entrando em um protocolo HTTP" });
}

export default status;
