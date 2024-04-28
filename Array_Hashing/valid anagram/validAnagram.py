def valid_anagram(s, t):
    if( len(s) != len(t)): return False

    sortedS = "".split(s).sorted().join("")
    sortedT = t.split().sorted().join("")
    return sortedS == sortedT


print(valid_anagram("rat", "ca"))
print(valid_anagram("anagram", "nagaram"))
print(valid_anagram("puna", "anup"))