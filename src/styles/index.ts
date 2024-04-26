/** @format */

import { colors, fontsize } from "@/constants/tokens";
import { Platform, StatusBar, StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: fontsize.base,
    color: colors.text,
  },
});

export const utilsStyles = StyleSheet.create({});
