{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  buildInputs = [
    pkgs.hut
    pkgs.zola
    pkgs.git # Optional, if you need Git in your environment
  ];
}
 