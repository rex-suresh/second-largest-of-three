#! /usr/local/bin/node

x=51
y=6
z=11

a = ( x < y ) ? x : y
b = ( y < z ) ? y : z
c = ( z < x ) ? z : x

a = ( a < b ) ? b : a
a = ( a < c ) ? c : a

console.log(a)