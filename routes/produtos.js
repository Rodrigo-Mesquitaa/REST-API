const express = require('express');
const router = express.Router();


// RETORNAR TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
	res.status(200).send({
    mensagem: 'Retorna todos os pedidos'

	});
});

// ADICIONA UM PRODUTO
router.pos('/', (req, res, next) => {
	res.status(201).send({
    mensagem: 'Adicionar pedido'

	});
});

// RETORNA OS DADOS DO PRODUTO
router.get('/:id_produto', (req, res, next) => {
	const id = req.params.id_produto

	if (id === 'especial') {
	res.status(200).send({
	mensagem: 'Você descobriu o ID especial',
	id: id
});
	} else {
	res.status(200).send({
	mensagem: 'Você passou um ID'
});
	}
});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
	res.status(201).send({
    mensagem: 'Produto alterado'

	});
});

//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
	res.status(201).send({
    mensagem: 'Produto excluido'

	});
});


module.exports = router;