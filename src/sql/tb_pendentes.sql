CREATE TABLE `pendentes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `artista` varchar(100) DEFAULT NULL,
  `album` varchar(100) DEFAULT NULL,
  `gravadora` varchar(100) DEFAULT NULL,
  `situacao_compra` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
