package Automation.Utilities;

import org.apache.commons.codec.binary.Base64;

public class Common_Functions {

	public static String encryptPassword(String Password) {
		byte[] encodedBytes = Base64.encodeBase64("Digital@1234".getBytes());
		return new String(encodedBytes);
	}

	public static String decryptPassword(String encodedPassword) {
		byte[] decodedBytes = Base64.decodeBase64(encodedPassword);
		return new String(decodedBytes);
	}
}
