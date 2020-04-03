//% weight=100 color=#0fbc11 icon="?"
namespace VF60 {
    /**
     * initialize serial display
     * @param lösche Display
     */
    //% block
    export function initDisplay(): void {
        serial.writeString("\027\\?LD2");
        serial.writeString("\027[2J");
        serial.writeString("\027[1;1H");
    }

    /**
     * initialize serial display
     * @param col Spalte (1..20)
     * @param row Zeile (1..2)
     */
    //% block
    export function setCursor(col: number, row: number): void {
        if (row > 0 && row < 2 && col > 0 && col < 21) {
            serial.writeString("\027[");
            serial.writeString(col + "");
            serial.writeString(";");
            serial.writeString(row + "");
            serial.writeString("H");
        }
    }

}
