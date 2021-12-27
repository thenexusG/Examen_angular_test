
CREATE TABLE `personas` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `ApellidoP` varchar(50) NOT NULL,
  `ApellidoM` varchar(50) NOT NULL,
  `Direccion` text NOT NULL,
  `Telefono` varchar(20) NOT NULL
)

ALTER TABLE `personas`
 ADD PRIMARY KEY (`Id`);


ALTER TABLE `personas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
