// I — Interface Segregation Principle (Princípio da Segregação da Interface)

interface PrinterInterface {
	print: () => void
	scan: () => void
}

class Printer1 implements BasicPrinterInterface {
	print: () => void
}

// Deveriamos separar essa interface 

interface BasicPrinterInterface {
	print: () => void
}

interface PrinterWithScanInterface {
	scan: () => void
}

class Printer2 implements BasicPrinterInterface, PrinterWithScanInterface {
	scan: () => void
	print: () => void
}

// D — Dependency Inversion Principle (Princípio da inversão da dependência)

