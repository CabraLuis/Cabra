-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 08-12-2022 a las 01:57:39
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `catalogo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juego`
--

DROP TABLE IF EXISTS `juego`;
CREATE TABLE IF NOT EXISTS `juego` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `salida` int(4) DEFAULT NULL,
  `desarrollador` varchar(20) DEFAULT NULL,
  `distribuidor` varchar(20) DEFAULT NULL,
  `clasificacion` varchar(26) DEFAULT NULL,
  `generos` varchar(55) DEFAULT NULL,
  `modos` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `juego`
--

INSERT INTO `juego` (`id`, `nombre`, `salida`, `desarrollador`, `distribuidor`, `clasificacion`, `generos`, `modos`) VALUES
(1, 'Among Us', 2018, 'Innersloth', 'Innersloth', 'Todos +10', 'Estrategia', 'Multijugador'),
(2, 'Overwatch', 2016, 'Blizzard', 'Blizzard', 'Adolescentes', 'Accion Estrategia', 'Multijugador'),
(3, 'Broforce', 2015, 'Free Lives', 'Devolver Digital', 'Maduro +17', 'Accion Aventura', 'Un jugador Dos jugadores Multijugador'),
(4, 'Terraria', 2011, 'Re-Logic', '505 Games', 'Adolescentes', 'Accion Aventura', 'Un jugador Multijugador'),
(5, 'Minecraft', 2011, 'Mojang Studios', 'Mojang', 'Todos +10', 'Aventura', 'Un jugador Multijugador');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
