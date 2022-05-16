/**
 * Uma rota de API. Esse código é backend e pode ser usado para
 * fazer requisições para outros serviços, preparar algumas informações,
 * formatar dados de antemão ou simplesmente disponibilizar um endpoint
 * para o usuário
 */
export default function handler(req, res) {
	res.status(200).json({ name: "John Doe" });
}
