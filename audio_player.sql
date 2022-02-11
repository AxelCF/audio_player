-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 11 fév. 2022 à 11:16
-- Version du serveur : 5.7.36
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `audio_player`
--

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `coverplaylist` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `coverplaylist`) VALUES
(1, './ASSETS/MUSIC/shuffle.webp'),
(2, './ASSETS/MUSIC/Cover A.jpg'),
(3, './ASSETS/MUSIC/Cover B.jpg'),
(4, './ASSETS/MUSIC/nirvana.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `link` varchar(255) NOT NULL,
  `cover_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `music`
--

INSERT INTO `music` (`id`, `title`, `artist`, `link`, `cover_id`) VALUES
(1, 'Pulse', 'RTPN', 'Pulse.mp3', 1),
(2, 'Termination', 'RTPN', 'Termination.mp3', 1),
(3, 'Aftershock', 'RTPN', 'Aftershock.mp3', 1),
(4, 'Sustain', 'RTPN', 'Sustain.mp3', 1),
(5, 'D.A.C', 'RTPN', 'DAC.mp3', 1),
(6, 'Air', 'Johann Sebastian Bach', 'Air.mp3', 2),
(7, 'Nocturne op.9 No.2', 'Chopin', 'Nocturne.mp3', 2),
(8, 'La jeune fille et la mort', 'Schubert', 'La jeune fille et la mort.mp3', 2),
(9, 'La Lettre à Élise', 'Beethoven', 'La Lettre à Élise.mp3', 2),
(10, 'La marche Turque', 'Mozart', 'La marche Turque.mp3', 2),
(11, 'Big Gun', 'ACDC', 'Big Gun.mp3', 3),
(12, 'Back In Black', 'ACDC', 'Back In Black.mp3', 3),
(13, 'Highway to Hell', 'ACDC', 'Highway to Hell.mp3', 3),
(14, 'Thunderstruck', 'ACDC', 'Thunderstruck.mp3', 3),
(15, 'T.N.T', 'ACDC', 'TNT.mp3', 3);

-- --------------------------------------------------------

--
-- Structure de la table `playlists`
--

CREATE TABLE `playlists` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `playlists`
--

INSERT INTO `playlists` (`id`, `title`, `image`) VALUES
(1, 'electro', 'electro.jpg'),
(2, 'classic', 'classic.jpg'),
(3, 'hard_rock', 'hard_rock.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`),
  ADD KEY `music_playlists` (`cover_id`);

--
-- Index pour la table `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `music`
--
ALTER TABLE `music`
  ADD CONSTRAINT `music_playlists` FOREIGN KEY (`cover_id`) REFERENCES `playlists` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
