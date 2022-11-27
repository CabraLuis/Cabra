-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-11-2022 a las 03:59:41
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
  `id` int(2) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `salida` int(4) NOT NULL,
  `desarrollador` varchar(20) NOT NULL,
  `distribuidor` varchar(20) NOT NULL,
  `clasificacion` varchar(25) NOT NULL,
  `generos` varchar(55) NOT NULL,
  `modos` varchar(55) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `juego`
--

INSERT INTO `juego` (`id`, `nombre`, `salida`, `desarrollador`, `distribuidor`, `clasificacion`, `generos`, `modos`) VALUES
(0, 'Marvel vs Capcom', 1996, 'Capcom', 'Capcom', 'Adolescentes', 'Accion', 'Un jugador Dos jugadores'),
(1, 'Pokemon Rojo Fuego', 2004, 'Game Freak', 'Nintendo', 'Todos', 'RPG Estrategia', 'Un jugador'),
(2, 'Contra', 1987, 'Konami', 'Konami', 'Todos +10', 'Accion Aventura', 'Un jugador Dos jugadores'),
(3, 'Grand Theft Auto: San Andreas', 2004, 'Rockstar North', 'Rockstar Games', 'Maduro +17', 'Accion Aventura', 'Un jugador'),
(4, 'Rayman', 1995, 'Ubisoft', 'Ubisoft', 'Todos', 'Aventura', 'Un jugador');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
